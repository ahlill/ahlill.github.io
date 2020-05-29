function tekan(){
var	d_pipamm=parseFloat(document.input.d_pipa.value),
		d_aliranh=parseFloat(document.input.d_aliran.value),
		ketinggian1=parseFloat(document.input.ketinggian1.value),
		ketinggian2=parseFloat(document.input.ketinggian2.value),
		panjang_pipa=parseFloat(document.input.panjang_pipa.value),
		efisiensi=parseFloat(document.input.efisiensi.value),
		keran_gerbang=parseFloat(document.input.keran_gerbang.value),
		keran_bola=parseFloat(document.input.keran_bola.value),
		keran_sudut=parseFloat(document.input.keran_sudut.value),
		tekanan1=parseFloat(document.input.tekanan1.value),
		tekanan2=parseFloat(document.input.tekanan2.value),
		kecepatan1=parseFloat(document.input.kecepatan1.value),
		kecepatan2=parseFloat(document.input.kecepatan2.value),
		kerapatan=parseFloat(document.input.kerapatan.value),
		viskositas=parseFloat(document.input.viskositas.value),
		belokan_45_derajat=parseFloat(document.input.belokan_45_derajat.value),
		belokan_90_derajat=parseFloat(document.input.belokan_90_derajat.value),
		d_pipa_barumm=parseFloat(document.input.diameter_pipa_baru.value);
		// hasil
		// kecepatan_aliran=parseFloat(document.hasil.kecepatan_aliran.value),
		// reynold=parseFloat(document.hasil.reynold.value),
// 		jenis_aliran=(document.hasil.jenis_aliran.value),
		// koefisient_gesekan_pipa=parseFloat(document.hasil.koefisient_gesekan_pipa.value),
		// le=parseFloat(document.hasil.le.value),
		// kHeadloss_gerbang=parseFloat(document.hasil.kHeadloss_gerbang.value),
		// headloss_gerbang=parseFloat(document.hasil.headloss_gerbang.value),
		// kHeadloss_bola=parseFloat(document.hasil.kHeadloss_bola.value),
		// headloss_bola=parseFloat(document.hasil.headloss_bola.value),
		// kHeadloss_sudut=parseFloat(document.hasil.kHeadloss_sudut.value),
		// headloss_sudut=parseFloat(document.hasil.headloss_sudut.value),
		// perbandingan_diameter=parseFloat(document.hasil.perbandingan_diameter.value),
		// koefisient_diameter=parseFloat(document.hasil.koefisient_diameter.value);

 //friction
const g=9.81
const ketelitian=5
//kecepatan aliran
const d_pipa=d_pipamm/1000 //=> meter
// const r=d_pipa/2 //jari jari
const a=(3.14/4)*Math.pow(d_pipa,2) //alas
const d_aliran=d_aliranh/3600 //konversi s
const kecepatan_aliran1=d_aliran/a
document.hasil.kecepatan_aliran.value=kecepatan_aliran1.toFixed(ketelitian)


//bilangan reynold
const reynold1=(kerapatan*kecepatan_aliran1*d_pipa)/viskositas
document.hasil.reynold.value=reynold1.toFixed(0)


// koefisient gesekan pipa
var f = (reynold1<2300)? 64/reynold1 : 0.3164/Math.pow(reynold1, 0.25);
document.hasil.koefisient_gesekan_pipa.value=f.toFixed(ketelitian)
document
if (reynold1<2300){
	document.hasil.jenis_aliran.value="LAMINER"
}else if(reynold1==2300){
	document.hasil.jenis_aliran.value="TRANSISI"
}else{
	document.hasil.jenis_aliran.value="TURBULEN"
}
const jenis_aliran=(document.hasil.jenis_aliran.value)

//Entrance Length
const le=(reynold1<2300)? 138*d_pipa:35*d_pipa
document.hasil.le.value=le.toFixed(ketelitian) 


//Headloss belokan 90 deg
const ld90 = 30
const headloss90 = (f*ld90*Math.pow(kecepatan_aliran1,2)*belokan_90_derajat)/(2*g)
document.hasil.headloss_90.value=headloss90.toFixed(ketelitian)


// Headloss belokan 45 derajat
const ld45=16
const headloss45 = (f*ld45*Math.pow(kecepatan_aliran1,2)*belokan_45_derajat)/(2*g)
document.hasil.headloss_45.value=headloss45.toFixed(ketelitian)


//Perbandingan Diameter 
const d_pipa_baru=d_pipa_barumm/1000
const perbandingan_diameter=(d_pipa_baru<=d_pipa)? Math.pow(d_pipa_baru,2)/Math.pow(d_pipa,2) : Math.pow(d_pipa,2)/ Math.pow(d_pipa_baru,2)
document.hasil.perbandingan_diameter.value=perbandingan_diameter.toFixed(ketelitian)

const koefisient_diameter=(perbandingan_diameter<=0.715)? 0.4*(1.25-0.87) : 0.75*(1-0.87);
const koefisient_hd =koefisient_diameter*Math.pow(kecepatan_aliran1,2)/(2*g)
document.hasil.koefisient_diameter.value=koefisient_hd.toFixed(ketelitian)


// headloss mayor
const headloss_mayor=(f*panjang_pipa*Math.pow(kecepatan_aliran1,2))/(2*g*d_pipa)
document.hasil.mayor_HL.value=headloss_mayor.toFixed(ketelitian)


// headloss keran gerbang
const ldg=8
const kHeadlossg = f*ldg
document.hasil.kHeadloss_gerbang.value=kHeadlossg.toFixed(ketelitian)
const headlossg = (f*ldg*Math.pow(kecepatan_aliran1,2)*keran_gerbang)/(2*g)
document.hasil.headloss_gerbang.value=headlossg.toFixed(ketelitian)


// headloss keran bola
const ldb=340
const kHeadlossb = f*ldb
document.hasil.kHeadloss_bola.value=kHeadlossb.toFixed(ketelitian)
const headlossb = (f*ldb*Math.pow(kecepatan_aliran1,2)*keran_bola)/(2*g)
document.hasil.headloss_bola.value=headlossb.toFixed(ketelitian)


// headloss keran sudut
const lds=150
const kHeadlosss = f*lds
document.hasil.kHeadloss_sudut.value=kHeadlosss.toFixed(ketelitian)
const headlosss = (f*lds*Math.pow(kecepatan_aliran1,2)*keran_sudut)/(2*g)
document.hasil.headloss_sudut.value=headlosss.toFixed(ketelitian)


// headloss entrace
const ken = 0.5
const headloss_e = ken*Math.pow(kecepatan_aliran1,2)/(2*g)
document.hasil.headloss_e.value=headloss_e.toFixed(ketelitian)


// headloss keran total
const headlosskt=headlossg+headlossb+headlosss
document.hasil.headloss_kt.value=headlosskt.toFixed(ketelitian)



// headloss belokan
const headloss_bel=headloss45+headloss90
document.hasil.headloss_bel.value=headloss_bel.toFixed(ketelitian)


// headloss perubahan diameter
const headloss_d=0
document.hasil.headloss_d.value=headloss_d.toFixed(ketelitian)


//headloss minor total
const headloss_mt=headloss_e+headlosskt+headloss_bel
document.hasil.headloss_mt.value=headloss_mt.toFixed(ketelitian)


// headloss total
const headloss_total=headloss_mt+headloss_mayor
document.hasil.headloss_total.value=headloss_total.toFixed(ketelitian)

const nilai_f=(reynold1<2300)? "64/Re" : "0.3164/(Re^0.25)"
const vk = Math.pow(kecepatan_aliran1,2).toFixed(ketelitian)
const fket = f.toFixed(ketelitian)
// Jawaban
const jawaban =`Jawaban : \n
					A = π/4*d^2
					A = 3.14/4*${Math.pow(d_pipa,2).toFixed(ketelitian)} 
					A = ${a.toFixed(ketelitian)} \n
					v = Q/A
					v = (${d_aliranh}/3600)/${a.toFixed(ketelitian)}
					v = ${((d_aliranh/3600)/a).toFixed(ketelitian)} \n
					Re = (rho*v*d)/miu
					Re = (${kerapatan}*${kecepatan_aliran1.toFixed(ketelitian)}*${d_pipa})/${viskositas}
					Re = ${reynold1.toFixed(ketelitian)}\n
					Karena aliran ini memiliki nilai Re sebesar ${reynold1.toFixed(0)} maka aliran ini berjenis "${jenis_aliran}".
					Sehingga nilai f = ${nilai_f}\n
					Mencari Headloss Mayor :
					HL Mayor = (f*l*(v^2))/2*g*d
					HL Mayor = (${f.toFixed(ketelitian)}*${panjang_pipa}*(${kecepatan_aliran1.toFixed(ketelitian)}^2))/(2*${g}*${d_pipa})
					HL Mayor = ${headloss_mayor.toFixed(ketelitian)} \n
					Mencari Headloss Minor :
					HL Entrance = k*(v^2)/2g
					HL Entrance = 0.5*${vk}/(2*${g})
					HL Entrance = ${headloss_e.toFixed(ketelitian)} \n
					Headloss Belokan
					HL belokan 90 derajat = f*30*v^2*jumlah belokan/2g
					HL belokan 90 derajat = ${f.toFixed(ketelitian)}*30*${vk}*${belokan_90_derajat}/2*${g}
					HL belokan 90 derajat = ${headloss90.toFixed(ketelitian)} \n
					HL belokan 45 derajat = f*16*v^2*jumlah belokan/2g
					HL belokan 45 derajat = ${f.toFixed(ketelitian)}*16*${vk}*${belokan_45_derajat}/2*${g}
					HL belokan 45 derajat = ${headloss45.toFixed(ketelitian)} \n
					Headloss belokan total adalah = ${headloss_bel.toFixed(ketelitian)} \n
					Headloss Keran
					HL keran gerbang = f*8*(v^2)*jumlah keran/2g
					HL keran gerbang = ${fket}*8*${vk}*${keran_gerbang}/2*${g}
					HL keran gerbang = ${headlossg.toFixed(ketelitian)} \n
					HL keran bola = f*340*(v^2)*jumlah keran/2g
					HL keran bola = ${fket}*340*${vk}*${keran_bola}/2*${g}
					HL keran bola = ${headlossb.toFixed(ketelitian)} \n
					HL keran sudut = f*150*(v^2)*jumlah keran/2g
					HL keran sudut = ${fket}*150*${vk}*${keran_sudut}/2*${g}
					HL keran sudut = ${headlosss.toFixed(ketelitian)} \n
					HL Keran total = HL keran gerbang + HL keran bola + HL keran sudut
					HL keran total = ${headlosskt.toFixed(ketelitian)} \n
					HL minor total = HL Entrance + HL belokan total + HL keran total
					HL minor total = ${headloss_e.toFixed(ketelitian)} + ${headloss_bel.toFixed(ketelitian)} + ${headlosskt.toFixed(ketelitian)}
					HL minor total = ${headloss_mt.toFixed(ketelitian)} \n
					HL TOTAL = HL minor total + HL mayor
					HL TOTAL = ${headloss_total.toFixed(ketelitian)}






					` 
alert(jawaban)














}
