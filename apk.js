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
		// jenis_aliran=parseFloat(document.hasil.jenis_aliran.value),
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

// console.log(viskositas)
// console.log(d_aliran)
// console.log(d_pipa)
// console.log(kecepatan_aliran1)


//bilangan reynold
const reynold1=(kerapatan*kecepatan_aliran1*d_pipa)/viskositas
document.hasil.reynold.value=reynold1.toFixed(ketelitian)


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


const headloss_total=headloss_mt+headloss_mayor
document.hasil.headloss_total.value=headloss_total.toFixed(ketelitian)
}




