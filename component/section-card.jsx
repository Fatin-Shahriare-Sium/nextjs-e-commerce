import Image from 'next/image'
import Link from 'next/link'
const SectionCard = ({img,title,price,priceoff,href}) => {
    function textTruncate(title){
        if(title.length>20){
            return title.substr(0,20)+'...'
        }else{
            return title
        }
    }

    function realPrice(price,priceOff){
        let percentage=price * priceOff/100
        return price-percentage
    }
    return (
        <Link href={href}>
        <div data-off={priceoff && `${priceoff}%`} className='section-card'> 
            <div className="section-card__img">
                <Image width={200}  className='section-card__imgx' objectFit='contain' height={200} src={img} />
            </div>
            <div className="section-card__details mt-5">
                <p style={{textAlign:'center',fontSize:'1.7rem',fontWeight:'500',wordBreak:'break-all'}}>{textTruncate(title)}</p>
                <div className="section-card__details-price">
                    <p style={{textAlign:'center',fontSize:'1.5rem',margin:'0px'}} className={priceoff ?'main-price cut':'main-price'}>{price}</p>
                    <p className='priceoff'>{priceoff && realPrice(price,priceoff)}</p>
                </div>
            </div>

        </div>
        
        </Link>
    )
}

export default SectionCard;
