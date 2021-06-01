import Image from 'next/image'
const SectionCard = ({img,title}) => {
    return (
        <div className='section-card'> 
            <div className="section-card__img mt-3">
                <Image width={200} objectFit='contain' height={200} src={img}/>
            </div>
            <div className="section-card__details mt-5">
                <p style={{textAlign:'center',fontSize:'1.7rem',fontWeight:'500'}}>{title}</p>
            </div>
        </div>
    )
}

export default SectionCard;
