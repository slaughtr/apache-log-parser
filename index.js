module.exports = ({ string, options = { } }) => {
	// Default combined log format is
	// LogFormat "%h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\"" combined
	// h = remote host (IP address of user)
	// l = remote logname (if supplied) - usually just "-"
	// u = remote username (if supplied/auth'd) - usually just "-"
	// t = time, in common log format time format standard english format (apache docs are dense!)
	// r = first line of request IE "GET /some/request/path.ext HTTP/1.1"
	// s = status (code) IE 301 404 etc
	// O = size in bytes
	// Referer = The referer for the request
	// User-Agent = The user agent of the requesting user
	// i = interpolation character, ignore 
	
	let [ ip, i1, i2, ts, tz, method, resource, protocol, statusCode, size, referer, ...userAgent ] = string.split(' ');

	statusCode = +statusCode;
	size = +size;
	// ts and tz are wrapped in brackets [] so we remove those
	ts = ts.substring(1);
	tz = tz.substring(0, tz.length - 1);
	const time = ts + tz;

	// put our User-Agent back together
	userAgent = userAgent.join('');
	
	return { ip, time, method, resource, protocol, statusCode, size, referer, userAgent };
}
