import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRecipe, getTypes } from '../redux/actions';

let Joder = function () {
	const dispatch = useDispatch();
	const dietTypes = useSelector((state) => state.types);
	console.log(dietTypes);
};

console.log(Joder());
