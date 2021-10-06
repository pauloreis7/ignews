import { screen, render } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'

import { getPrismicClient } from "../../services/prismic";
import Posts, { getStaticProps } from '../../pages/posts'

const posts = [
 { slug: 'my-new-post', title: 'New post', excerpt: 'Post excerpt', updatedAt: 'March, 10' },
]

jest.mock('../../services/prismic')

describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('New post')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            last_publication_date: '04-01-2021',
            data: {
              title: [
                { type: 'heading', text: 'New post' }
              ],
              content: [
                { type: 'paragraph', text: 'Post excerpt' }
              ]
            }
          }
        ]
      })
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug: 'my-new-post',
            title: 'New post',
            excerpt: 'Post excerpt',
            updatedAt: '01 de abril de 2021'
          }]
        }
      })
    )
  })
})