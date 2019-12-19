module.exports =  centerid => {
	return (
		`select centerid, equipmentid, quantity, intransit 
			from CEN_CENTER_EQUIPMENT 
			where centerid = '${centerid}' and ( intransit <> 0 or quantity <> 0 );`
	)
}