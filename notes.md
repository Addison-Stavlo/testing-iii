notes from lecture:

# Recap - Qs after yesterday from students:

- is it even worth it?
- it is hard to figure out what to test...
- what makes a good test?
- how is it done in the work place?
- how do we know when we have tested enough?
- methodologies? unit, integration, end to end
- unit vs integration?

## what does a good test look like?

- runs fast
- independent of one another
  - running test1 or test2 in any order should work
  - one test should not rely on another
  - no shared state across tests
- should not cause side effects
- should not depend on shared state
- as many assertions as needed to prove correctness
- do not write unneccsary assertions
- one feature/expected behaviour/assumption per test
- test one unit at a time, to worry about the rest
- mock/stub external dependencies
- does not test implementation details

## User stories/use cases and scenarios

As a ... role
I want ... functionality
So that ... value

As a baseball score tracker person,
I want to click the strike button for an at bat,
So that the score board is updated.

## Scenarios (translates nicely into tests)

Given ... //arrange
When ... //act/SUT
Then ... //assert

Given 2 strikes and 1 ball
When the ball button is clicked
Then display should read '2 strikes and 1 ball'