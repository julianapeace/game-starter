"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Initialize the agent
            // await agent.init();
            // Example of running the agent with a fixed interval
            // await agent.run(60, { verbose: true });
            yield agent_1.rupaul_agent.init();
            yield agent_1.rupaul_agent.run(60, { verbose: true });
            // Alternative: Run the agent step by step
            // await agent.step();
            // Example of running a specific worker with a task
            // const worker = rupaul_agent.getWorkerById("hello_worker");
            // if (worker) {
            //     await worker.runTask(
            //         "be friendly and welcoming",
            //         { verbose: true }
            //     );
            // }
        }
        catch (error) {
            console.error("Error running agent:", error);
        }
    });
}
main();
