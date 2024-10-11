export default function ReviewDetails({params} : {
    params : {
        gameId : string,
        reviewId : string
    }
})
{
    return <h1>Review {params.reviewId} for game {params.gameId}</h1>
}