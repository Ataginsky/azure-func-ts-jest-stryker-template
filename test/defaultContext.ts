import { Logger } from "@azure/functions"

export default {
    log: (jest.fn() as any) as Logger
};