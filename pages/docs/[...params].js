import { useRouter } from "next/router";

function Doc(){
    const router = useRouter();
    const { params} = router.query;
    console.log("params: ", params)
    return <h1>Docs Home ProductsPage</h1>
}

export default Doc;