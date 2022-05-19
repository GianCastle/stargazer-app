import { render } from "@testing-library/react";
import TopicItem from "../TopicItem";


describe('header component', () => {
  it('should render sucessfully a topic', () => {
    const mockedTopic = {
      node: {
        resourcePath: "test-12",
        stargazers: {
          totalCount: 1
        },
        repositoryTopics: {
          totalCount: 1,
          nodes: [
            {
              topic: {
                name: "test",
                stargazerCount: 1,
                relatedTopics: [
                  {
                    name: "test"
                  }
                ]
              }
            }
          ]

        }
      }
    }
    const { wrapper, getByTestId } = render(<TopicItem topic={mockedTopic} />);
    const header = getByTestId('topic-item-test-12');

    expect(header).toHaveTextContent('test-12 1💻 Repo topics -> test 1');
    expect(wrapper).toMatchSnapshot();
  });

  it('should contains no-topic labels if no labels for a repo is found', () => {
    const mockedTopic = {
      node: {
        resourcePath: "test-12",
        stargazers: {
          totalCount: 1
        },
        repositoryTopics: {
          totalCount: 0,
          nodes: []
        }
      }
    }
    const { wrapper, getByTestId } = render(<TopicItem topic={mockedTopic} />);
    const header = getByTestId('topic-item-test-12');

    expect(header).toHaveTextContent('test-12 1❌ No topics found');
    expect(wrapper).toMatchSnapshot();
  });
})