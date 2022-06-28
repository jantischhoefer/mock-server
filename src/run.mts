#!/usr/bin/env node
import { CallbackId, OnClose, OnInit } from "@wuespace/vertx-mock-server";
import pkg from "@wuespace/vertx-mock-server";
const { MockServer } = pkg;

class MyMockServer extends MockServer implements OnInit, OnClose {
  private telecommandListener: CallbackId = 0;

  onInit() {
    this.telecommandListener = this.register("telecommand", (args) => {
      console.log("Received telecommand request: ", args.message);
      if (args.type === "send") args.respond({ result: true });
    });
  }

  onClose() {
    this.unregister(this.telecommandListener);
  }
}

const mockServer = new MyMockServer();

console.log("Starting mock Application Server");
mockServer.listen();
