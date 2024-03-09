import React from 'react';
import { Context } from '../Parol/Parol';

const useToken = (setterOnly = false) => {
	const ctx = React.useContext(Context);

	return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
}


export default useToken;
