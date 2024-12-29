import Redis from "ioredis"
import dotenv from "dotenv";
dotenv.config()
export  const redis = new Redis(process.env.UPSTASH_REDIS_CODE);
//its a keyvalued structure
await redis.set('foo', 'bar');