## Before You Start

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Knowledge of [React](https://reactjs.org) and [Next.js](https://nextjs.org/) is required to use this template (willingness to learn will be sufficient).

## Set up

It's important you follow these instructions step by step, and don't skip anything. If you're ready, let's go!

### Install dependencies
Install all dependencies by running `yarn` or `npm install`

### Add database
We use PostgreSQL to persist the data. Either set up the databse locally, or create a [free cloud instance](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1).

Once you have your `DATABASE_URL` place it inside `.env` file inside project root directory. (Create `.env` file if it doesn't exist).

The file should look something like this

**.env**
```bash
DATABASE_URL=postgres://bklorcl:34f2f60e0f@ec2-63-34-180-86.eu-west-1.compute.amazonaws.com:5432/sahk
```

Now, run the following command

```
yarn db:push
# or
npm run db:push
```

This will generate database client, and initializes the schema.

### Add authentication
Authentication flow is managed using [next-auth](https://next-auth.js.org/). The whole configuration is inside `pages/api/auth[...nextauth].ts`.

Start by adding authentication using Google. Go to [Google Console](https://console.cloud.google.com/apis/dashboard) and follow [these steps](https://support.google.com/cloud/answer/6158849?hl=en) to acquire OAuth credentials.

You should end up looking at the following screen.

**Make sure Javascript origin and Callback URL are pointing to localhost as demonstrated on the screenshot below.**

![OAuth Client](assets/screenshots/oauth-client.png)


Click on "Create" and save the given ID and Secret into `.env.local` file inside project directory.

**.env.local**
```bash
GOOGLE_ID=541687459554-548s4q1d5f8s5a1s4d5wr8ia4avum5ei.apps.googleusercontent.com
GOOGLE_SECRET=SNGHSP-s5s1g4w5q9w8e1g6h9j8oAhlxvpeX
```
  
Next Auth requires to create a random string used for signing secrets. Write one and store it inside `.env.local` as well.
  
**.env.local**
```bash
GOOGLE_ID=541687459554-548s4q1d5f8s5a1s4d5wr8ia4avum5ei.apps.googleusercontent.com
GOOGLE_SECRET=SNGHSP-s5s1g4w5q9w8e1g6h9j8oAhlxvpeX
NEXTAUTH_SECRET=sf7aq4wfa2sf2as+f6as2fqwrqw4rqw98r4
```

### Add Stripe integration

[Stripe](https://stripe.com) provides fastest way to manage payment and subscriptions for your SaaS. To integrate it, all you need to do is generate Stripe secrets inside the [Stripe dashboard](https://dashboard.stripe.com/dashboard).

![Stripe Dashboard](assets/screenshots/stripe.png)

Get the public and secret key and place them inside `.env.local` file.

**.env.local**
```bash
GOOGLE_ID=541687459554-548s4q1d5f8s5a1s4d5wr8ia4avum5ei.apps.googleusercontent.com
GOOGLE_SECRET=SNGHSP-s5s1g4w5q9w8e1g6h9j8oAhlxvpeX
NEXTAUTH_SECRET=sf7aq4wfa2sf2as+f6as2fqwrqw4rqw98r4
STRIPE_SECRET_KEY=sk_test_51KhWuhBzuBZnTa4f56asf7489qw4fq894f84wf98q4wfas21fa6s5f4q98w4fw8q4f9qw84fq9w8f4q98w4fas5f4as6f4
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_s5s1f5q9w54BZnTiNHgkmmsoTjhs4w5r24fg6a
```

### Add info about your site

Head over to `site-config.json` and fill in the fields with the info about your site. 

This information will be used to generate all required `meta` tags to boost SEO.  

**site-config.json**
```
{
    "site": {
        "domain": "next-unicorn.com",
        "name": "My Next Unicorn",
        "title": "This site will get $5kMRR in 3 months",
        "description": "Or at least I will try :)"
    },
    "author": {
        "twitter": "Your twitter handle"
    },
}
```

### Add your favicon

For this, you need to have a square type logo

To generate proper favicon logo for your website, use https://realfavicongenerator.net.

Download all the files from favicon generator and place them inside `public` directory.

Additionaly, replace the logo in `assets/img/favicon.png` with you owen logo. Make sure the format is also `.png`

### Add your logo

This template also uses horizontal type of logo used in header and sidebar. To replace it with your own logo, change the file in `assets/img/logo.png` and `public/logo.png` with your own.

### Deploy

At this point, you're ready to deploy. Head over to [Vercel](https://vercel.com/dashboard) and deploy this project.

**Make sure to set ENV variables properly on production environment.**

### Add Stripe webhooks

Once the site is deployed, we need to integrate it with [Stripe Webhooks](https://dashboard.stripe.com/webhooks) to manage the subscriptions.

![Stripe Webhooks](assets/screenshots/stripe-webhooks.png)

Set endpoint url like following.

```
https://<your-site>.vercel.app/api/stripe/webhooks
```

And select to listen for following events:

```
product.created
product.updated
price.created
price.updated
checkout.session.completed
customer.subscription.updated
customer.subscription.deleted
```

When the Webhook is created, you need to get the signing key and place it inside the `.env.local` file. This is the last environment variable.

![Webhook Secret](assets/screenshots/webhook-secret-reveal.png)

**.env.local**
```bash
GOOGLE_ID=541687459554-548s4q1d5f8s5a1s4d5wr8ia4avum5ei.apps.googleusercontent.com
GOOGLE_SECRET=SNGHSP-s5s1g4w5q9w8e1g6h9j8oAhlxvpeX
NEXTAUTH_SECRET=sf7aq4wfa2sf2as+f6as2fqwrqw4rqw98r4
STRIPE_SECRET_KEY=sk_test_51KhWuhBzuBZnTa4f56asf7489qw4fq894f84wf98q4wfas21fa6s5f4q98w4fw8q4f9qw84fq9w8f4q98w4fas5f4as6f4
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_s5s1f5q9w54BZnTiNHgkmmsoTjhs4w5r24fg6a
STRIPE_WEBHOOK_SECRET=whsec_s5g1q8etyk1l9Pn227b16j4KJs5f4w8rt7g1j6
```

**Don't forget to add this environment variable to your Vercel project as well.**

### Set up pricing

At this point, everything is ready to go. The last step is to price and create your products.

Head over to [Stripe Dashboard](https://dashboard.stripe.com/products?active=true) and set your pricing.

### Build the next big thing

The boilerplate is ready to go. You can start adding features and building your product. 