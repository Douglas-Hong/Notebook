export default function getDate() {
  const options = {
		month: 'numeric',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};
  
	return new Date().toLocaleString('en-US', options);
}