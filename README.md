
# Kwenta Grant Council 


### Install dependencies

```bash
npm install --legacy-peer-deps
```

### Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local


### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
npm start
```

### Unit Testing

```bash
npm run test:unit
```

For unit tests we use a combination of Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Page tests should be added to the \_\_tests\_\_ folder at the root as it is not possible co-locate tests and pages in nextjs. Other tests should be co-located in a \_\_tests\_\_ folder next to their related file.

### End-2-End testing

In order to run fully automated end-2-end (e2e) tests Kwenta uses [Synpress](https://github.com/Synthetixio/synpress) (a wrapper around [Cypress](https://www.cypress.io/)).

#### Constraints

The current e2e tests are written to be run on Optimistic Kovan using Chrome as the browser.

#### Setup

- Download and install Google Chrome
- Setup a test wallet on Optimistic Kovan and fund it with plenty of ETH (to pay for gas) and sUSD
- Prior to running the tests you must set the environment variables below in the shell from which npm is started. Unfortunately, at this time other methods to set said environment variables (eg. through `.env.local`) don't work in conjunction with Synpress.
# GC_landing
