import {ColorStructure} from './ColorStructure';
import StarRating from './StarRating';

export default function Color(props: {color : ColorStructure, onRate:(id:string, rating:number) =>void})
{
    const onSelect= (rating:number) => {
        props.onRate(props.color.id, rating)
      };

    return(
        <section>
            <h1>{props.color.title}</h1>
            <div style ={{height : 50, backgroundColor: props.color.color}} />
            <StarRating totalStars={5} selectedStars={props.color.rating} onRate={onSelect} />
        </section>
    );
}

