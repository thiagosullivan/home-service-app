import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-sa-east-1.hygraph.com/v2/cluc7gvze092507weofhcvoze/master"

const getSlider = async () => {
    const query = gql`
        query GetSlider {
            sliders {
                id
                name
                image {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

const getCategories = async () => {
    const query = gql`
        query GetCategory {
            categories {
                id
                name
                icon {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result
}

export default {
    getSlider,
    getCategories,
}