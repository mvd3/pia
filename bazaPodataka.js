//Kreiranje i upotreba baze
use olimpijada

//Brisi ako vec postoji
db.dropDatabase();

//Ubacivanje prvih korisnika
db.korisnici.insert({'korisnickoIme':'org', 'email':'org@tokyo2020.com', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Шинзо', 'prezime':'Абе', 'nacionalnost':'jp', 'uloga':0});
db.korisnici.insert({'korisnickoIme':'delegat-rs', 'email':'del@olteam.rs', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Драган', 'prezime':'Петровић', 'nacionalnost':'rs', 'uloga':2});
db.korisnici.insert({'korisnickoIme':'delegat-us', 'email':'del@ot.com', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Paul', 'prezime':'Winchester', 'nacionalnost':'us', 'uloga':2});
db.korisnici.insert({'korisnickoIme':'delegat-jp', 'email':'del@ot.jp', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Takuma', 'prezime':'Wagato', 'nacionalnost':'jp', 'uloga':2});
db.korisnici.insert({'korisnickoIme':'delegat-br', 'email':'del@ot.br', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Rafaelo', 'prezime':'Gutemaras', 'nacionalnost':'br', 'uloga':2});
db.korisnici.insert({'korisnickoIme':'vodja-rs', 'email':'vodja@olteam.rs', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Радован', 'prezime':'Николић', 'nacionalnost':'rs', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-us', 'email':'cos@ot.com', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'John', 'prezime':'Doe', 'nacionalnost':'us', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-ru', 'email':'cos@ot.ru', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Сергеи', 'prezime':'Рушфатов', 'nacionalnost':'ru', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-cn', 'email':'cos@ot.cn', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Zu', 'prezime':'Hang', 'nacionalnost':'cn', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-jp', 'email':'cos@ot.jp', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Hajime', 'prezime':'Otoka', 'nacionalnost':'jp', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-gb', 'email':'cos@ot.co.uk', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'William', 'prezime':'McBurth', 'nacionalnost':'gb', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-au', 'email':'cos@ot.co.au', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Steven', 'prezime':'Anderson', 'nacionalnost':'au', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-fr', 'email':'cos@ot.fr', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Jean', 'prezime':'Touqville', 'nacionalnost':'fr', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-de', 'email':'cos@ot.de', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Ernst', 'prezime':'Mann', 'nacionalnost':'de', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-br', 'email':'cos@ot.br', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Pablo', 'prezime':'Mukenesh', 'nacionalnost':'br', 'uloga':1});
db.korisnici.insert({'korisnickoIme':'vodja-ke', 'email':'cos@ot.ke', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Cicivald', 'prezime':'Zonkonkya', 'nacionalnost':'ke', 'uloga':1});


//Ubacivanje prvog zahteva
db.zahtevi.insert({'korisnickoIme':'fuhrer', 'email':'hm@om.de', 'lozinka':'3cZoHJXhGrTsC7RCEyPcKw==', 'ime':'Hans', 'prezime':'Müller', 'nacionalnost':'de', 'uloga':1});

//Ubacivanje sportova
var atletika = db.sportovi.insertOne({'sport': 'Атлетика', 'discipline': []});
var biciklizam = db.sportovi.insertOne({'sport': 'Бициклизам', 'discipline': []});
var plivanje = db.sportovi.insertOne({'sport': 'Пливање', 'discipline': []});
var streljastvo = db.sportovi.insertOne({'sport': 'Стрељаштво', 'discipline': []});
var tenis = db.sportovi.insertOne({'sport': 'Тенис', 'discipline': []});

//Ubacivanje pojedincacnih disciplina
//Atletika
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '100mt', 'disciplina': '100 метара трчање', 'formatRezultata': 'ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '200mt', 'disciplina': '200 метара трчање', 'formatRezultata': 'ss:tt', 'brojSerija': 1, 'raspolozivM': false, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '400mt', 'disciplina': '400 метара трчање', 'formatRezultata': 'ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '800mt', 'disciplina': '800 метара трчање', 'formatRezultata': 'mm:ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '5kmt', 'disciplina': '5000 метара трчање', 'formatRezultata': 'mm:ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '10kmt', 'disciplina': '10000 метара трчање', 'formatRezultata': 'mm:ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'sv', 'disciplina': 'Скок у вис', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'sd', 'disciplina': 'Скок у даљ', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'trs', 'disciplina': 'Троскок', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': false, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'sm', 'disciplina': 'Скок са мотком', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'bk', 'disciplina': 'Бацање кугле', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': false, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'bd', 'disciplina': 'Бацање диска', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'bkl', 'disciplina': 'Бацање кладива', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'bko', 'disciplina': 'Бацање копља', 'formatRezultata': 'm,cm', 'brojSerija': 3, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': 'mt', 'disciplina': 'Маратон', 'formatRezultata': 'cc:mm:ss', 'brojSerija': 1, 'raspolozivM': false, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '20kbh', 'disciplina': '20км брзо ходање', 'formatRezultata': 'cc:mm:ss', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': atletika.insertedId}, {$push: {'discipline': {'sifra': '50kbh', 'disciplina': '50км брзо ходање', 'formatRezultata': 'cc:mm:ss', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
//biciklizam
db.sportovi.update({'_id': biciklizam.insertedId}, {$push: {'discipline': {'sifra': '225kbt', 'disciplina': '225км друмска трка', 'formatRezultata': 'cc:mm:ss', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
//Plivanje
db.sportovi.update({'_id': plivanje.insertedId}, {$push: {'discipline': {'sifra': '100mp', 'disciplina': '100м лептир', 'formatRezultata': 'ss:tt', 'brojSerija': 1, 'raspolozivM': false, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': plivanje.insertedId}, {$push: {'discipline': {'sifra': '200mp', 'disciplina': '200м слободно', 'formatRezultata': 'ss:tt', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
//Streljastvo
db.sportovi.update({'_id': streljastvo.insertedId}, {$push: {'discipline': {'sifra': '50mst', 'disciplina': '50м тростав', 'formatRezultata': 'p', 'brojSerija': 6, 'raspolozivM': true, 'raspolozivZ': false, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': streljastvo.insertedId}, {$push: {'discipline': {'sifra': '10msvpu', 'disciplina': '10м ваздушна пушка', 'formatRezultata': 'p', 'brojSerija': 6, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': streljastvo.insertedId}, {$push: {'discipline': {'sifra': '25msmpi', 'disciplina': '25м малокалибарски пиштољ', 'formatRezultata': 'p', 'brojSerija': 6, 'raspolozivM': true, 'raspolozivZ': false, 'prijavljeniM': [], 'prijavljeniZ': []}}});
db.sportovi.update({'_id': streljastvo.insertedId}, {$push: {'discipline': {'sifra': '10msvpi', 'disciplina': '10м ваздушни пиштољ', 'formatRezultata': 'p', 'brojSerija': 6, 'raspolozivM': true, 'raspolozivZ': true, 'prijavljeniM': [], 'prijavljeniZ': []}}});
//Tenis
db.sportovi.update({'_id': tenis.insertedId}, {$push: {'discipline': {'sifra': 'ts', 'disciplina': 'Сингл', 'formatRezultata': 's:s', 'brojSerija': 1, 'raspolozivM': true, 'raspolozivZ': false, 'prijavljeniM': [], 'prijavljeniZ': []}}});

//Ubacivanje zemalja
var srbija = db.zemlje.insertOne({'naziv': 'Србија', 'kod': 'rs', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var sad = db.zemlje.insertOne({'naziv': 'САД', 'kod': 'us', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var kina = db.zemlje.insertOne({'naziv': 'Кина', 'kod': 'cn', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var rusija = db.zemlje.insertOne({'naziv': 'Русија', 'kod': 'ru', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var japan = db.zemlje.insertOne({'naziv': 'Јапан', 'kod': 'jp', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var vb = db.zemlje.insertOne({'naziv': 'Велика Британија', 'kod': 'gb', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var australija = db.zemlje.insertOne({'naziv': 'Аустралија', 'kod': 'au', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var francuska = db.zemlje.insertOne({'naziv': 'Француска', 'kod': 'fr', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var nemacka = db.zemlje.insertOne({'naziv': 'Немачка', 'kod': 'de', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var brazil = db.zemlje.insertOne({'naziv': 'Бразил', 'kod': 'br', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});
var kenija = db.zemlje.insertOne({'naziv': 'Кенија', 'kod': 'ke', 'medalje': {'zlato': 0, 'srebro': 0, 'bronza': 0}});

//Dodavanje sportista
var rs_nd = db.sportisti.insertOne({'ime': 'Новак', 'prezime': 'Ђоковић', 'zemlja': srbija.insertedId , 'sport': tenis.insertedId ,'pol': 0});
var rs_od = db.sportisti.insertOne({'ime': 'Олга', 'prezime': 'Даниловић', 'zemlja': srbija.insertedId , 'sport': tenis.insertedId ,'pol': 1});
var rs_vs = db.sportisti.insertOne({'ime': 'Велимир', 'prezime': 'Стјепановић', 'zemlja': srbija.insertedId , 'sport': plivanje.insertedId ,'pol': 0});
var rs_ac = db.sportisti.insertOne({'ime': 'Ања', 'prezime': 'Цревар', 'zemlja': srbija.insertedId , 'sport': plivanje.insertedId ,'pol': 1});
var rs_dm = db.sportisti.insertOne({'ime': 'Дамир', 'prezime': 'Микец', 'zemlja': srbija.insertedId , 'sport': streljastvo.insertedId ,'pol': 0});
var rs_za = db.sportisti.insertOne({'ime': 'Зорана', 'prezime': 'Аруновић', 'zemlja': srbija.insertedId , 'sport': streljastvo.insertedId,'pol': 1});
var rs_ak = db.sportisti.insertOne({'ime': 'Асмир', 'prezime': 'Колашинац', 'zemlja': srbija.insertedId , 'sport': atletika.insertedId ,'pol': 0});
var rs_is = db.sportisti.insertOne({'ime': 'Ивана', 'prezime': 'Шпановић', 'zemlja': srbija.insertedId , 'sport': atletika.insertedId ,'pol': 1});
var rs_ss = db.sportisti.insertOne({'ime': 'Страхиња', 'prezime': 'Стефановић', 'zemlja': srbija.insertedId , 'sport': atletika.insertedId ,'pol': 0});
var rs_mn = db.sportisti.insertOne({'ime': 'Милица', 'prezime': 'Новаковић', 'zemlja': srbija.insertedId , 'sport': atletika.insertedId ,'pol': 1});
var us_kb = db.sportisti.insertOne({'ime': 'Kenny', 'prezime': 'Bednarek', 'zemlja': sad.insertedId, 'sport': atletika.insertedId,'pol': 0});
var us_am = db.sportisti.insertOne({'ime': 'Athing', 'prezime': 'Mu', 'zemlja': sad.insertedId, 'sport': atletika.insertedId,'pol': 1});
var us_gh = db.sportisti.insertOne({'ime': 'Grant', 'prezime': 'Holloway', 'zemlja': sad.insertedId, 'sport': atletika.insertedId,'pol': 0});
var us_ms = db.sportisti.insertOne({'ime': 'Molly', 'prezime': 'Seidel', 'zemlja': sad.insertedId, 'sport': atletika.insertedId,'pol': 1});
var us_bm = db.sportisti.insertOne({'ime': 'Brandon', 'prezime': 'McNulty', 'zemlja': sad.insertedId, 'sport': biciklizam.insertedId,'pol': 0}); //cycling
var us_an = db.sportisti.insertOne({'ime': 'Amber', 'prezime': 'Neben', 'zemlja': sad.insertedId, 'sport': biciklizam.insertedId,'pol': 1});
var us_cd = db.sportisti.insertOne({'ime': 'Caeleb', 'prezime': 'Dressel', 'zemlja': sad.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //swim
var us_kl = db.sportisti.insertOne({'ime': 'Katie', 'prezime': 'Ledecky', 'zemlja': sad.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var us_ws = db.sportisti.insertOne({'ime': 'Will', 'prezime': 'Shanner', 'zemlja': sad.insertedId, 'sport': streljastvo.insertedId,'pol': 0}); //shoot
var us_ae = db.sportisti.insertOne({'ime': 'Amber', 'prezime': 'English', 'zemlja': sad.insertedId, 'sport': streljastvo.insertedId,'pol': 1});
var cn_sb = db.sportisti.insertOne({'ime': 'Su', 'prezime': 'Bingtian', 'zemlja': kina.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var cn_lh = db.sportisti.insertOne({'ime': 'Liu', 'prezime': 'Hong', 'zemlja': kina.insertedId, 'sport': atletika.insertedId,'pol': 1});
var cn_xc = db.sportisti.insertOne({'ime': 'Xu', 'prezime': 'Chao', 'zemlja': kina.insertedId, 'sport': biciklizam.insertedId,'pol': 0}); //c
var cn_ws = db.sportisti.insertOne({'ime': 'Wang', 'prezime': 'Shun', 'zemlja': kina.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var cn_zy = db.sportisti.insertOne({'ime': 'Zhang', 'prezime': 'Yufei', 'zemlja': kina.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var cn_zc = db.sportisti.insertOne({'ime': 'Zhang', 'prezime': 'Changhong', 'zemlja': kina.insertedId, 'sport': streljastvo.insertedId,'pol': 0}); //s
var cn_yq = db.sportisti.insertOne({'ime': 'Yang', 'prezime': 'Qian', 'zemlja': kina.insertedId, 'sport': streljastvo.insertedId,'pol': 1});
var cn_sl = db.sportisti.insertOne({'ime': 'Sheng', 'prezime': 'Lihao', 'zemlja': kina.insertedId, 'sport': streljastvo.insertedId,'pol': 0});
var ru_is = db.sportisti.insertOne({'ime': 'Илија', 'prezime': 'Шкурјенов', 'zemlja': rusija.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var ru_ml = db.sportisti.insertOne({'ime': 'Марија', 'prezime': 'Ласицкене', 'zemlja': rusija.insertedId, 'sport': atletika.insertedId,'pol': 1});
var ru_as = db.sportisti.insertOne({'ime': 'Анжелика', 'prezime': 'Сидорова', 'zemlja': rusija.insertedId, 'sport': atletika.insertedId,'pol': 1});
var ru_er = db.sportisti.insertOne({'ime': 'Евгениј', 'prezime': 'Рилов', 'zemlja': rusija.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var ru_kk = db.sportisti.insertOne({'ime': 'Карен', 'prezime': 'Качанов', 'zemlja': rusija.insertedId, 'sport': tenis.insertedId,'pol': 0}); //t
var ru_ev = db.sportisti.insertOne({'ime': 'Елена', 'prezime': 'Веснина', 'zemlja': rusija.insertedId, 'sport': tenis.insertedId,'pol': 1});
var ru_sk = db.sportisti.insertOne({'ime': 'Сергеј', 'prezime': 'Каменски', 'zemlja': rusija.insertedId, 'sport': streljastvo.insertedId,'pol': 0}); //s
var ru_vb = db.sportisti.insertOne({'ime': 'Виталина', 'prezime': 'Батсарашкина', 'zemlja': rusija.insertedId, 'sport': streljastvo.insertedId,'pol': 1});
var ru_dd = db.sportisti.insertOne({'ime': 'Денис', 'prezime': 'Дмитријев', 'zemlja': rusija.insertedId, 'sport': biciklizam.insertedId,'pol': 0}); //b
var ru_ds = db.sportisti.insertOne({'ime': 'Дариа', 'prezime': 'Шмелева', 'zemlja': rusija.insertedId, 'sport': biciklizam.insertedId,'pol': 1});
var jp_ki = db.sportisti.insertOne({'ime': 'Koki', 'prezime': 'Ikeda', 'zemlja': japan.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var jp_yk = db.sportisti.insertOne({'ime': 'Yumi', 'prezime': 'Kajihara', 'zemlja': japan.insertedId, 'sport': biciklizam.insertedId,'pol': 1}); //b
var jp_kn = db.sportisti.insertOne({'ime': 'Kei', 'prezime': 'Nishikori', 'zemlja': japan.insertedId, 'sport': tenis.insertedId,'pol': 0}); //t
var jp_no = db.sportisti.insertOne({'ime': 'Naomi', 'prezime': 'Osaka', 'zemlja': japan.insertedId, 'sport': tenis.insertedId,'pol': 1});
var uk_rk = db.sportisti.insertOne({'ime': 'Richard', 'prezime': 'Kilty', 'zemlja': vb.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var uk_lm = db.sportisti.insertOne({'ime': 'Laura', 'prezime': 'Muir', 'zemlja': vb.insertedId, 'sport': atletika.insertedId,'pol': 1});
var uk_jc = db.sportisti.insertOne({'ime': 'Jack', 'prezime': 'Carlin', 'zemlja': vb.insertedId, 'sport': biciklizam.insertedId,'pol': 0}); //b
var uk_ne = db.sportisti.insertOne({'ime': 'Neah', 'prezime': 'Evans', 'zemlja': vb.insertedId, 'sport': biciklizam.insertedId,'pol': 1});
var uk_am = db.sportisti.insertOne({'ime': 'Andy', 'prezime': 'Murray', 'zemlja': vb.insertedId, 'sport': tenis.insertedId,'pol': 0}); //t
var uk_hw = db.sportisti.insertOne({'ime': 'Heather', 'prezime': 'Watson', 'zemlja': vb.insertedId, 'sport': tenis.insertedId,'pol': 1});
var uk_mc = db.sportisti.insertOne({'ime': 'Matthew', 'prezime': 'Coward-Holley', 'zemlja': vb.insertedId, 'sport': streljastvo.insertedId,'pol': 0}); //s
var uk_td = db.sportisti.insertOne({'ime': 'Tom', 'prezime': 'Dean', 'zemlja': vb.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var uk_ap = db.sportisti.insertOne({'ime': 'Adam', 'prezime': 'Peaty', 'zemlja': vb.insertedId, 'sport': plivanje.insertedId,'pol': 0});
var uk_mr = db.sportisti.insertOne({'ime': 'Molly', 'prezime': 'Renshaw', 'zemlja': vb.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var au_pb = db.sportisti.insertOne({'ime': 'Peter', 'prezime': 'Bol', 'zemlja': australija.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var au_lh = db.sportisti.insertOne({'ime': 'Linden', 'prezime': 'Hall', 'zemlja': australija.insertedId, 'sport': atletika.insertedId,'pol': 1});
var au_rd = db.sportisti.insertOne({'ime': 'Rohan', 'prezime': 'Dennis', 'zemlja': australija.insertedId, 'sport': biciklizam.insertedId,'pol': 0}); //b
var au_gb = db.sportisti.insertOne({'ime': 'Grace', 'prezime': 'Brown', 'zemlja': australija.insertedId, 'sport': biciklizam.insertedId,'pol': 1});
var au_zs = db.sportisti.insertOne({'ime': 'Zac', 'prezime': 'Stubblety-Cook', 'zemlja': australija.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var au_em = db.sportisti.insertOne({'ime': 'Emma', 'prezime': 'McKeon', 'zemlja': australija.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var au_km = db.sportisti.insertOne({'ime': 'Kaylee', 'prezime': 'McKeown', 'zemlja': australija.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var fr_km = db.sportisti.insertOne({'ime': 'Kevin', 'prezime': 'Mayer', 'zemlja': francuska.insertedId , 'sport': atletika.insertedId,'pol': 0}); //a
var fr_jq = db.sportisti.insertOne({'ime': 'Jean', 'prezime': 'Quiquampoix', 'zemlja': francuska.insertedId , 'sport': streljastvo.insertedId,'pol': 0}); //s
var fr_fm = db.sportisti.insertOne({'ime': 'Florent', 'prezime': 'Manaudou', 'zemlja': francuska.insertedId , 'sport': plivanje.insertedId,'pol': 0}); //p
var de_jh = db.sportisti.insertOne({'ime': 'Jonathan', 'prezime': 'Hilbert', 'zemlja': nemacka.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var de_gl = db.sportisti.insertOne({'ime': 'Gina', 'prezime': 'Lückenkemper', 'zemlja': nemacka.insertedId, 'sport': atletika.insertedId,'pol': 1});
var de_eh = db.sportisti.insertOne({'ime': 'Emma', 'prezime': 'Hinze', 'zemlja': nemacka.insertedId, 'sport': biciklizam.insertedId,'pol': 1}); //b
var de_fw = db.sportisti.insertOne({'ime': 'Florian', 'prezime': 'Wellbrock', 'zemlja': nemacka.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var de_sk = db.sportisti.insertOne({'ime': 'Sarah', 'prezime': 'Köhler', 'zemlja': nemacka.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var de_az = db.sportisti.insertOne({'ime': 'Alexander', 'prezime': 'Zverev', 'zemlja': nemacka.insertedId, 'sport': tenis.insertedId,'pol': 0}); //t
var br_as = db.sportisti.insertOne({'ime': 'Alison', 'prezime': 'dos Santos', 'zemlja': brazil.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var br_es = db.sportisti.insertOne({'ime': 'Érica', 'prezime': 'de Sena', 'zemlja': brazil.insertedId, 'sport': atletika.insertedId,'pol': 1});
var br_pb = db.sportisti.insertOne({'ime': 'Pedro', 'prezime': 'Barros', 'zemlja': brazil.insertedId, 'sport': streljastvo.insertedId,'pol': 0}); //s
var br_kh = db.sportisti.insertOne({'ime': 'Kelvin', 'prezime': 'Hoefler', 'zemlja': brazil.insertedId, 'sport': streljastvo.insertedId,'pol': 0});
var br_rl = db.sportisti.insertOne({'ime': 'Raysa', 'prezime': 'Leal', 'zemlja': brazil.insertedId, 'sport': streljastvo.insertedId,'pol': 1});
var br_bf = db.sportisti.insertOne({'ime': 'Bruno', 'prezime': 'Fratus', 'zemlja': brazil.insertedId, 'sport': plivanje.insertedId,'pol': 0}); //p
var br_am = db.sportisti.insertOne({'ime': 'Ana', 'prezime': 'Marcela Cunha', 'zemlja': brazil.insertedId, 'sport': plivanje.insertedId,'pol': 1});
var br_lp = db.sportisti.insertOne({'ime': 'Laura', 'prezime': 'Pigossi', 'zemlja': brazil.insertedId, 'sport': tenis.insertedId,'pol': 1}); //t
var kn_ek = db.sportisti.insertOne({'ime': 'Emmanuel', 'prezime': 'Korir', 'zemlja': kenija.insertedId, 'sport': atletika.insertedId,'pol': 0}); //a
var kn_ek = db.sportisti.insertOne({'ime': 'Eliud', 'prezime': 'Kipchoge', 'zemlja': kenija.insertedId, 'sport': atletika.insertedId,'pol': 0});
var kn_fk = db.sportisti.insertOne({'ime': 'Faith', 'prezime': 'Kipyegon', 'zemlja': kenija.insertedId, 'sport': atletika.insertedId,'pol': 1});
var kn_pj = db.sportisti.insertOne({'ime': 'Peres', 'prezime': 'Jepchirchir', 'zemlja': kenija.insertedId, 'sport': atletika.insertedId,'pol': 1});

//Lokacije
var l_os = db.lokacije.insertOne({'ime': 'Олимпијски стадион', 'sport': atletika.insertedId, 'zauzece': []});
var l_op = db.lokacije.insertOne({'ime': 'Одори парк', 'sport': atletika.insertedId, 'zauzece': []});
var l_ta = db.lokacije.insertOne({'ime': 'Токијски аква центар', 'sport': plivanje.insertedId, 'zauzece': []});
var l_tt = db.lokacije.insertOne({'ime': 'Токио Тацуми међународни пливачки центар', 'sport': plivanje.insertedId, 'zauzece': []});
var l_ka = db.lokacije.insertOne({'ime': 'Камп Асака', 'sport': streljastvo.insertedId, 'zauzece': []});
var l_mp = db.lokacije.insertOne({'ime': 'Мусашиномори парк', 'sport': biciklizam.insertedId, 'zauzece': []});
var l_ak = db.lokacije.insertOne({'ime': 'Ариаке колисеум', 'sport': tenis.insertedId, 'zauzece': []});

//Dodavanje takmicara
//muskarci atletika - 200 metara
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': rs_ss.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': us_kb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': cn_sb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': ru_is.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': jp_ki.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': uk_rk.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': au_pb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': de_jh.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': br_as.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': '200mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': kn_ek.insertedId} }});
//muskarci atletika - bacanje kugle
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': rs_ak.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': us_kb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': cn_sb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': ru_is.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': jp_ki.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': uk_rk.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': au_pb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': de_jh.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': br_as.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'bk'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': kn_ek.insertedId} }});
//muskarci atletika - maraton
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': us_kb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': cn_sb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': ru_is.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': jp_ki.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': au_pb.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': de_jh.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': br_as.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'mt'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': kn_ek.insertedId} }});
//zene streljastvo - 50 metara trostav
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '50mst'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': rs_za.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '50mst'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': us_ae.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '50mst'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': cn_yq.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '50mst'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': ru_vb.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '50mst'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': br_rl.insertedId} }});
//zene streljastvo - 25 metara malokalibarski pistolj
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '25msmpi'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': rs_za.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '25msmpi'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': us_ae.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '25msmpi'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': cn_yq.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '25msmpi'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': ru_vb.insertedId} }});
db.sportovi.update({'_id': streljastvo.insertedId, 'discipline.sifra': '25msmpi'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': br_rl.insertedId} }});
//zene tenis - singl
db.sportovi.update({'_id': tenis.insertedId, 'discipline.sifra': 'ts'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': rs_od.insertedId} }});
db.sportovi.update({'_id': tenis.insertedId, 'discipline.sifra': 'ts'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': jp_no.insertedId} }});
db.sportovi.update({'_id': tenis.insertedId, 'discipline.sifra': 'ts'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': uk_hw.insertedId} }});
db.sportovi.update({'_id': tenis.insertedId, 'discipline.sifra': 'ts'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': ru_ev.insertedId} }});
//zene atletika - troskok
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': rs_is.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': us_am.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': cn_lh.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': ru_ml.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': uk_lm.insertedId} }});
db.sportovi.update({'_id': atletika.insertedId, 'discipline.sifra': 'trs'}, {$addToSet: {'discipline.$.prijavljeniZ' : {'_id': kn_pj.insertedId} }});
//muskarci plivanje - 100 metara
db.sportovi.update({'_id': plivanje.insertedId, 'discipline.sifra': '100mp'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': rs_vs.insertedId} }});
db.sportovi.update({'_id': plivanje.insertedId, 'discipline.sifra': '100mp'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': us_cd.insertedId} }});
db.sportovi.update({'_id': plivanje.insertedId, 'discipline.sifra': '100mp'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': br_bf.insertedId} }});
db.sportovi.update({'_id': plivanje.insertedId, 'discipline.sifra': '100mp'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': de_fw.insertedId} }});
db.sportovi.update({'_id': plivanje.insertedId, 'discipline.sifra': '100mp'}, {$addToSet: {'discipline.$.prijavljeniM' : {'_id': au_zs.insertedId} }});

//Kreiranje takmicenja
//U pripremi
var t_m_p_100 = db.takmicenja.insertOne({"naziv" : "Пливање (М) - 100м лептир", "sport" : plivanje.insertedId, "disciplina" : "100mp", "kategorija" : 0, "delegat" : "", "status" : 0, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_z_a_trs = db.takmicenja.insertOne({"naziv" : "Атлетика (Ж) - Скок са мотком", "sport" : atletika.insertedId, "disciplina" : "trs", "kategorija" : 1, "delegat" : "", "status" : 0, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId}});
//U toku
var t_m_a_200mt = db.takmicenja.insertOne({"naziv" : "Атлетика (М) - 200 метара трчање", "sport" : atletika.insertedId, "disciplina" : "200mt", "kategorija" : 0, "delegat" : "delegat-jp", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_m_a_bk = db.takmicenja.insertOne({"naziv" : "Атлетика (М) - бацање кугле", "sport" : atletika.insertedId, "disciplina" : "bk", "kategorija" : 0, "delegat" : "delegat-us", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_m_a_mt = db.takmicenja.insertOne({"naziv" : "Атлетика (М) - маратон", "sport" : atletika.insertedId, "disciplina" : "mt", "kategorija" : 0, "delegat" : "delegat-br", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_z_s_50mst = db.takmicenja.insertOne({"naziv" : "Стрељаштво (Ж) - 50 метара тростав", "sport" : streljastvo.insertedId, "disciplina" : "50mst", "kategorija" : 1, "delegat" : "delegat-rs", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_z_s_25msmpi = db.takmicenja.insertOne({"naziv" : "Стрељаштво (Ж) - 25 метара малокалибарски пиштољ", "sport" : streljastvo.insertedId, "disciplina" : "25msmpi", "kategorija" : 1, "delegat" : "delegat-br", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});
var t_z_t_ts = db.takmicenja.insertOne({"naziv" : "Тенис (Ж) - сингл", "sport" : tenis.insertedId, "disciplina" : "ts", "kategorija" : 1, "delegat" : "delegat-jp", "status" : 1, "medalje" : { "zlato" : l_ak.insertedId, "srebro" : l_ak.insertedId, "bronza" : l_ak.insertedId }});

//Termini i lokacije za takmicenja
var z_os_1 = db.zauzeca.insertOne({"takmicenje": t_m_a_200mt.insertedId, "od": new ISODate("2021-07-25T10:00:00Z"), "do": new ISODate("2021-07-25T15:00:00Z"), "slobodno": true});
var z_os_2 = db.zauzeca.insertOne({"takmicenje": t_m_a_mt.insertedId, "od": new ISODate("2021-07-28T10:00:00Z"), "do": new ISODate("2021-07-28T14:00:00Z"), "slobodno": true});
var z_op_1 = db.zauzeca.insertOne({"takmicenje": t_m_a_bk.insertedId, "od": new ISODate("2021-07-26T08:00:00Z"), "do": new ISODate("2021-07-26T12:00:00Z"), "slobodno": true});
var z_op_2 = db.zauzeca.insertOne({"takmicenje": t_m_a_bk.insertedId, "od": new ISODate("2021-07-27T08:00:00Z"), "do": new ISODate("2021-07-27T12:00:00Z"), "slobodno": true});
var z_ka_1 = db.zauzeca.insertOne({"takmicenje": t_z_s_50mst.insertedId, "od": new ISODate("2021-08-01T12:00:00Z"), "do": new ISODate("2021-08-01T17:00:00Z"), "slobodno": true});
var z_ka_2 = db.zauzeca.insertOne({"takmicenje": t_z_s_25msmpi.insertedId, "od": new ISODate("2021-08-02T12:00:00Z"), "do": new ISODate("2021-08-02T17:00:00Z"), "slobodno": true});
var z_ak_1 = db.zauzeca.insertOne({"takmicenje": t_z_t_ts.insertedId, "od": new ISODate("2021-08-03T10:00:00Z"), "do": new ISODate("2021-08-03T18:00:00Z"), "slobodno": true});
var z_ak_2 = db.zauzeca.insertOne({"takmicenje": t_z_t_ts.insertedId, "od": new ISODate("2021-08-04T10:00:00Z"), "do": new ISODate("2021-08-04T18:00:00Z"), "slobodno": true});
//Dodavanje u lokaciju
db.lokacije.update({'_id': l_os.insertedId}, {$addToSet: {'zauzece': {'_id': z_os_1.insertedId}}});
db.lokacije.update({'_id': l_os.insertedId}, {$addToSet: {'zauzece': {'_id': z_os_2.insertedId}}});
db.lokacije.update({'_id': l_op.insertedId}, {$addToSet: {'zauzece': {'_id': z_op_1.insertedId}}});
db.lokacije.update({'_id': l_op.insertedId}, {$addToSet: {'zauzece': {'_id': z_op_2.insertedId}}});
db.lokacije.update({'_id': l_ka.insertedId}, {$addToSet: {'zauzece': {'_id': z_ka_1.insertedId}}});
db.lokacije.update({'_id': l_ka.insertedId}, {$addToSet: {'zauzece': {'_id': z_ka_2.insertedId}}});
db.lokacije.update({'_id': l_ak.insertedId}, {$addToSet: {'zauzece': {'_id': z_ak_1.insertedId}}});
db.lokacije.update({'_id': l_ak.insertedId}, {$addToSet: {'zauzece': {'_id': z_ak_2.insertedId}}});
