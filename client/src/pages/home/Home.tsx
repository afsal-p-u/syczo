import { useState } from 'react'
import { SwiperBox } from '../../components'
import { HomeAllCategories } from '../../utils/CategoriesData'
import HomeCategoryItem from '../../components/home/HomeCategoryItem'
import HomeMajorCategory from '../../components/home/HomeMajorCategory'
import { TodaysDealCategoryData } from '../../utils/MajorCategoryData'

const Home = () => {
  
  return (
    <>
        <SwiperBox />
        {/* categories */}
        <div className="px-[100px]">
          <div className="flex mt-3 gap-x-10 gap-y-5 flex-wrap">
            {HomeAllCategories.map((item, i) => (
              <HomeCategoryItem name={item.name} image={item.image} key={i}  />
            ))}
          </div>

          {/* Todays deals */}
          {/* <HomeMajorCategory name={"New Arrivals"} items={TodaysDealCategoryData} /> */}
          <HomeMajorCategory name={"Recently Added"} items={TodaysDealCategoryData} />
          <HomeMajorCategory name={"Todays Best Deals"} items={TodaysDealCategoryData} />
        </div>
    </>
  )
}

export default Home