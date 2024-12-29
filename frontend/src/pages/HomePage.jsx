import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
// import { useProductStore } from "../stores/useProductStore";
// import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Attars", name: "Attar", imageUrl: "/attr.jpg" },
	{ href: "/RoomSprays", name: "RoomSprays", imageUrl: "/airfreshner.jpg" },
	{ href: "/Deodrants", name: "Deodrants", imageUrl: "/body.jpg" },
	{ href: "/Candles", name: "Candles", imageUrl: "/candles.jpg" },
	{ href: "/Colognes", name: "Cologne", imageUrl: "/cologne.jpg" },
	{ href: "/Lotions", name: "Lotions", imageUrl: "/lotions.jpg" },
	{ href: "/PerfumeOils", name: "PerfumeOils", imageUrl: "/perfmoil.jpg" },
];

const HomePage = () => {
	// const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	// useEffect(() => {
	// 	fetchFeaturedProducts();
	// }, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Elevate Your Presence With French Arabians
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{/* {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />} */}
			</div>
		</div>
	);
};
export default HomePage;
 {/* Background gradient */}
      {/* The <div> with the gradient background has the class absolute inset-0, which ensures that:
        absolute positions the element relative to its closest positioned ancestor (or the <body> if no ancestor is positioned).
        inset-0 sets all top, right, bottom, and left values to 0, stretching the <div> to cover the entire viewport.
        2. Z-Index and Layering:
        This <div> is rendered behind other elements due to its position in the DOM and the absence of a higher z-index.
        The gradient itself is applied via the CSS class bg-[radial-gradient(...)]. */}