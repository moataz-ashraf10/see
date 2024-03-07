import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/',"/shoes","/shorts","/clothes"]
});
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};
