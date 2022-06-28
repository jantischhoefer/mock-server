# mock-server
Simple Mock Server responding to Telecommands

## Summary

Small mock server relying on [Vertx Mock Server](https://github.com/wuespace/telestion-client/tree/main/packages/vertx-mock-server) from the [Telestion Client](https://github.com/wuespace/telestion-client).
Prints the received telecommand to the console and replies to the sender with the Telecommand message.

## Setup

### Preparation

The following tools are needed to run the mock server:

- [NodeJS](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

After you have installed both on your system you have to clone the repository:

```
git clone git@github.com:jantischhoefer/mock-server.git
cd mock-server
```

Next, install all dependencies with:

```
pnpm install
```

And run the mock server with:

```
pnpm test
```

Now the mock server is running and your Project-Specific Telestion Client should show you on the top right corner that he is connected.
After that you can choose a random Telecommand and click on send.
An alert after sending the Telecommand should pop up and another one with the reply.
