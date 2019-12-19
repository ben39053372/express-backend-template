module.exports =  centerid => {
	return (
		`select centerid, spartid, quantity, intransit 
			from CEN_CENTER_SPAREPART 
			where centerid = '${centerid}' and ( intransit <> 0 or quantity <> 0 );`
	)
}