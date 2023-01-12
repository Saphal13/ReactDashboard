import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';

import {Stacked,Pie,Button,SparkLine} from '../components';
import { earningData,SparklineAreaData,
ecomPieChart } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className="mt-12">
      {/* lg(large devices) */}
      <div className="flex flex-wrap
      lg:flex-nowrap justify-center">
        <div className="bg-white 
        dark:text-gray-400">

        </div>

      </div>
      Ecommerce
    </div>
  )
}

export default Ecommerce
