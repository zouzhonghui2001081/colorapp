import Star from "./Star";

export default function StarRating(props: {totalStars:number, selectedStars:number, onRate:(rating:number) =>void})
{
    return(
        <>
            {
                createArray(props.totalStars).map(
                    (n,i) =>(
                        <Star key={i} selected={props.selectedStars > i} onSelect={()=>{props.onRate(i+1)}} />
                    )
                )
            }
            <p>
            {props.selectedStars} of {props.totalStars} stars.
            </p>
        </>
    );
}

const createArray = (length : number) => [...Array(length)];