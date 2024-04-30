import { useGetCollectionQuery } from '@/features/Collections/ui/model/services/collectionAPI'
import Slider from '../MainComponents/Slider'
import { Link } from 'react-router-dom'
const CollectionSection = () => {
	const { data } = useGetCollectionQuery()
	// const dispatch = useAppDispatch();
	// const products = useAppSelector(productsSelector);

	// useEffect(() => {
	//     dispatch(fetchProducts());
	// }, [dispatch]);

	const click = () => {
		console.log(1)
	}
	return (
		<section className='flex flex-col md:flex-row gap-[30px]'>
			<div className='flex flex-col justify-end p-[50px] bg-bg-image-main4 bg-center bg-no-repeat bg-cover md:max-w-[570px] w-full h-[672px] rounded-[30px]'>
				<div className='flex flex-col gap-[16px] max-w-[400px]'>
					<h2 className='text-[32px] font-bold text-white'>
						Новая коллекция свитеров
					</h2>
					<Link
						to='/catalog'
						className='max-w-[250px] text-white text-[20px] rounded-[10px] px-[24px] py-[14px] bg-white/30 backdrop-blur-xl'
					>
						Перейти в каталог
					</Link>
				</div>
			</div>
			<div className='flex items-center md:px-[38px] rounded-[30px] md:bg-white w-full md:w-[55%]'>
				<Slider
					slidesPerView={2}
					spaceBetween={30}
					className=' w-full items-center h-max relative'
					slideClassName='h-max flex flex-col items-center gap-[16px] cursor-pointer relative'
					imageClassName='bg-white rounded-[20px]'
					textClassName='w-full'
					onClick={click}
					favorite={true}
					data={data?.results[0].products}
					break0={1}
					break1024={2}
					break1366={2}
					break1920={2}
					break2560={2}
				/>
			</div>
		</section>
	)
}

export default CollectionSection
