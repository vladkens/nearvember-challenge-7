use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LookupSet, UnorderedMap};
use near_sdk::{near_bindgen, BorshStorageKey, env};

#[derive(BorshStorageKey, BorshSerialize)]
pub enum StorageKeys {
    Candidates,
    Voters,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    pub candidates: UnorderedMap<String, u32>, // candidatName & votes
    pub voters: LookupSet<String>, // accountId
}

impl Default for Contract {
    fn default() -> Self {
        Self {
            candidates: UnorderedMap::new(StorageKeys::Candidates),
            voters: LookupSet::new(StorageKeys::Voters),
        }
    }
}

#[near_bindgen]
impl Contract {
    pub fn add_candidate(&mut self, candidate: String) {
        assert!(self.candidates.get(&candidate).is_none(), "candidate already exists");
        self.candidates.insert(&candidate, &0);
    }

    pub fn get_candidates(&self) -> Vec<(String, u32)> {
        self.candidates.to_vec()
    }

    pub fn vote(&mut self, candidate: String) {
        let voter = env::predecessor_account_id();
        assert!(!self.voters.contains(&voter), "you already vote");

        match self.candidates.get(&candidate) {
            None => {
                assert!(false, "candidate not exists");
            }
            Some(v) => {
                self.candidates.insert(&candidate, &(v + 1));
                self.voters.insert(&voter);
            }
        }
    }

    pub fn can_vote(&mut self) -> bool {
        let voter = env::predecessor_account_id();
        !self.voters.contains(&voter)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::{MockedBlockchain, testing_env, AccountId};
    use near_sdk::test_utils::VMContextBuilder;

    #[test]
    fn test_add_candidate() {
        let ctx = VMContextBuilder::new();
        testing_env!(ctx.build());
        
        let mut contract = Contract::default();

        let c1 = contract.get_candidates();
        assert_eq!(0, c1.len());

        contract.add_candidate("abc".to_string());

        let c2 = contract.get_candidates();
        // println!("{:?}", c2[0]);
        assert_eq!(1, c2.len());
        assert_eq!("abc".to_string(), c2[0].0);
        assert_eq!(0, c2[0].1);

        contract.add_candidate("xyz".to_string());
        let c3 = contract.get_candidates();
        assert_eq!(2, c3.len());
    }

    #[test]
    #[should_panic]
    fn test_cant_add_same_candidate_twice() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());
        let mut contract = Contract::default();

        contract.add_candidate("abc".to_string());
        contract.add_candidate("abc".to_string());
    }

    #[test]
    fn test_vote() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());
        let mut contract = Contract::default();

        contract.add_candidate("abc".to_string());
        contract.vote("abc".to_string());

        let c1 = contract.get_candidates();
        assert_eq!(1, c1.len());
        assert_eq!(1, c1[0].1);
    }

    #[test]
    #[should_panic]
    fn test_cant_vote_for_unexists() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());
        let mut contract = Contract::default();

        contract.vote("abc".to_string());
    }

    #[test]
    #[should_panic]
    fn test_cant_vote_twice() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());
        let mut contract = Contract::default();

        contract.add_candidate("abc".to_string());
        contract.vote("abc".to_string());
        contract.vote("abc".to_string());
    }

    #[test]
    fn test_test_can_vote() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());
        let mut contract = Contract::default();

        assert_eq!(true, contract.can_vote());

        contract.add_candidate("abc".to_string());
        contract.vote("abc".to_string());

        assert_eq!(false, contract.can_vote());
    }

    #[test]
    fn test_all_can_vote() {
        let context = VMContextBuilder::new();
        testing_env!(context.build());

        let mut contract = Contract::default();
        contract.add_candidate("abc".to_string());
        contract.vote("abc".to_string());

        let mut ctx2 = VMContextBuilder::new();
        ctx2.predecessor_account_id("alice".to_string().try_into().unwrap());
        testing_env!(ctx2.build());

        let c = contract.get_candidates();
        println!("{:?}", c);
        // assert_eq!(2, c[0].1);
        
    }
}