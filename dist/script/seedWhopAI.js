"use strict";
// AI Features Source code link =>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhoopAI = void 0;
require("dotenv/config");
const user_model_1 = __importDefault(require("../models/user.model"));
const database_config_1 = __importDefault(require("../config/database.config"));
const CreateWhoopAI = async () => {
    const existingWhoopAI = await user_model_1.default.findOne({ isAI: true });
    if (existingWhoopAI) {
        console.log("whoop ai already exists");
        await user_model_1.default.deleteOne({ _id: existingWhoopAI._id });
        // return whoopAI
    }
    const whoopAI = await user_model_1.default.create({
        name: "Whop AI",
        isAI: true,
        avatar: "https://res.cloudinary.com/dur8g9faa/image/upload/v1762143911/ur5xiptwrqzhw5rytono.jpg" //avatar
    });
    console.log("Whoop created ", whoopAI._id);
    return whoopAI;
};
exports.CreateWhoopAI = CreateWhoopAI;
const seedWhopAI = async () => {
    try {
        await (0, database_config_1.default)();
        await (0, exports.CreateWhoopAI)();
        console.log("Seeding Completed");
        process.exit(0);
    }
    catch (error) {
        console.log("Seeding Failed", error);
        process.exit(1);
    }
};
seedWhopAI();
