const getEqspTran = () => `
		SELECT 
			type '項目性質',
			a.date '日期',
			a.trid '異動編號',
			a.status '狀況',
			centerid '轉出分店',
			tocenterid '接收分店',
			nature '種類',
			eqspid '儀器/配件代碼',
			serialno '機身編號',
			tran_nature '異動性質',
			qty '數量',
			remark '備註',
			b.status '接收'
		from INV_EQSP_TRANS a inner join INV_EQSP_TRANS_DETAIL b on a.trid = b.trid
		order by a.date desc `

export default getEqspTran
