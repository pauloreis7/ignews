import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/client'
import { query as q } from 'faunadb'
import axios from "axios";

import { fauna } from "../../services/fauna";
import { stripe } from "../../services/stripe";

type User = {
  ref: {
    id: string;
  }
  data: {
    stripe_customer_id: string;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST') {

    const response = axios.post('https://api.harmonyplay.one/getLastWeek', {

    }, {
      headers: {
        'token': `0bdc856c-662e-46fe-89c9-63aa24a33c9c` 
      }
    })

    console.log(response)

    return res.status(200).json({  })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}