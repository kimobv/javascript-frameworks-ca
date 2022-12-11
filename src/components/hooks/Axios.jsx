import { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/Auth';

const url = process.env.REACT_APP_BASE_URL;

export default function Axios() {
	const [auth] = useContext(AuthContext);
	const apiClient = axios.create({
		baseURL: url,
	});
	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	});
	return apiClient;
}
