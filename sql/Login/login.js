module.exports = (username, password) => {
	return (
		`SELECT username, centerid, accessgroupid
		FROM SEC_ADMIN
		where adminid = '${username}' and password = '${password}' and deleted = '0';`
	)
}

