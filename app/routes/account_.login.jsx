/**
 * @param {LoaderFunctionArgs}
 */

import { AccountLoginForm } from '~/components/AccountLoginForm';
import {Link, useLoaderData} from '@remix-run/react';
import { createCustomerAccountClient } from '@shopify/hydrogen';
export async function loader({request, context}) {
  // await context.customerAccount.handleAuthStatus();
  
  return null;
}


export async function action({request, context}) {
  const {customerAccount} = context;
  const jsonBody = await request.json();
  console.log(jsonBody.email)
  console.log(customerAccount)
  
  
    // const customerToken = await customerAccount.login({
    //   email: jsonBody.email,
    //   password: jsonBody.password
    // });

    // console.log('Yes here ===>',customerToken);


    const accountCustomer = await fetch('https://freshgleaner.myshopify.com/api/2024-04/graphql.json',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '21caaed0c839ffc9ad054466b76ba919',
      },
      body: JSON.stringify({
        query: LOGIN_MUTATION,
        variables: {
          input: {
            email:jsonBody.email,
            password:jsonBody.password
          }
        }
      })
    })

    console.log(accountCustomer)
    
  

  return null;
}


export default function Login() {
  /** @type {LoaderReturnData} */
  // const {customer} = useLoaderData();

  return (
    <AccountLoginForm/>
  )

}

const LOGIN_MUTATION = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
