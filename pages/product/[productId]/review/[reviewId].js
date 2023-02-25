import { useRouter } from "next/router";
function ReviewDetails() {
    const router = useRouter();
    const {productId, reviewId } = router.query;
    return <div>
        <h1>Product {productId}, and review number {reviewId}</h1>
    </div>
}

export default ReviewDetails;