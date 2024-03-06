'use client';

import { Transition, motion } from 'framer-motion';
import React, { useState, useId } from 'react';

type FlexItem = {
	id: string,
	label: string,
};

type FlexProperties = {
	flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	alignContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
	flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const ITEMS: FlexItem[] = [
	{
		id: '2',
		label: 'Welcome',
	},
	{
		id: '1',
		label: 'to',
	},
	{
		id: '3',
		label: 'Flex',
	},
	{
		id: '7',
		label: 'Playground',
	},
];

const FlexPlayground = () => {
  const [flexDirection, setFlexDirection] = useState<FlexProperties['flexDirection']>('row');
  const [justifyContent, setJustifyContent] = useState<FlexProperties['justifyContent']>('flex-start');
  const [alignItems, setAlignItems] = useState<FlexProperties['alignItems']>('stretch');
  const [alignContent, setAlignContent] = useState<FlexProperties['alignContent']>('flex-start');
  const [flexWrap, setFlexWrap] = useState<FlexProperties['flexWrap']>('nowrap');
  // Flex properties prop.
  const flexProperties: FlexProperties = {
    flexDirection,
    justifyContent,
    alignItems,
	alignContent,
	flexWrap
  };
  // Transition prop.
  const transitionProperties: Transition = {
    type: 'spring',
    stiffness: 400,
    damping: 55,
  };
  // Spit it out.
  return (
    <section className={'flex flex-col gap-4 mt-4'}>
		{/** Playground */}
      <div className={'flex gap-1 min-h-52 w-full sm:min-w-96 border border-solid border-gray-500 p-1'} style={flexProperties}>
        {ITEMS.map((item) => (
          <motion.div
            layout={true}
            transition={transitionProperties}
            key={item.id}
            className={'flex justify-center items-center bg-nomadic-sand-300 p-2'}
          >
            <motion.p layout={true} transition={transitionProperties} className='text-gray-950 font-bold'>
				{item.label}
				</motion.p>
          </motion.div>
        ))}
      </div>
		{/** Controls. */}
      <div className={'flex gap-4 flex-wrap justify-start items-center max-w-96'}>
		{/** Flex Direction */}
        <SelectControl
          label="flex-direction"
          value={flexDirection}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFlexDirection(event.target.value as FlexProperties['flexDirection'])}
        >
          <option value="row">row</option>
          <option value="column">column</option>
        </SelectControl>
		{/** Justify Content */}
        <SelectControl
          label="justify-content"
          value={justifyContent}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setJustifyContent(event.target.value as FlexProperties['justifyContent'])}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </SelectControl>
		{/** Align Items */}
        <SelectControl
          label="align-items"
          value={alignItems}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setAlignItems(event.target.value as FlexProperties['alignItems'])}
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </SelectControl>
		{/** Align Content */}
		<SelectControl
          label="align-content"
          value={alignContent}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setAlignContent(event.target.value as FlexProperties['alignContent'])}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
        </SelectControl>
		{/** Flex Wrap */}
		<SelectControl
          label="flex-wrap"
          value={flexWrap}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFlexWrap(event.target.value as FlexProperties['flexWrap'])}
        >
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </SelectControl>
      </div>
    </section>
  );
}

type SelectControlProps = {
	label: string,
	value: string,
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
	children: React.ReactNode
};

function SelectControl({ label, value, onChange, ...delegated } : SelectControlProps) {
  const id = useId();
  // Spit it out.
  return (
    <div className={'flex flex-col justify-center items-start gap-2 w-full md:w-select-control'}>
      <label htmlFor={id} className='text-gray-950 dark:text-white-50'>
		{label}
	 </label>
      <select
        id={id}
        className={'flex grow justify-start items-center gap-2 border-2 border-transparent outline-none focus-visible:ring ring-blue-500 rounded-3xl p-2 bg-white-50 dark:bg-gray-950 text-gray-950 dark:text-white-50 w-full appearance-none cursor-pointer'}
        value={value}
        onChange={onChange}
        {...delegated}
      />
    </div>
  );
}

export default FlexPlayground;
