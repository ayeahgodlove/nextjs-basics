import { useRouter } from "next/router";
function Reviews() {
    const router = useRouter();
    const {productId} = router.query;
    return <div>
        <h1>Reviews Page</h1>
        <ul>
            <li>Review 1</li>
            <li>Review 2</li>
            <li>Review 3</li>
            <li>Review 4</li>
            <li>Review 5</li>
        </ul>
    </div>
}

export default Reviews;