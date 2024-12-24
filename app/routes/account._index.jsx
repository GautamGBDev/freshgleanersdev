import {redirect} from '@shopify/remix-oxygen';

export async function loader({request, context}) {
  const {customerAccount} = context;
  if(customerAccount.isLoggedIn()) {
    return redirect('/account/orders');
  }else {

  }return redirect('/account/login');
  //  return redirect('/account');
}

/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
