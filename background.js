if (!pagerank) {
	var pagerank = {};
}
if (!pagerank.background) {
	pagerank.background = {
		flag: [],
		getDomain: function(url, trimSubdomain) { //returns domain from url
			var hostname = url.match(/:\/\/(.[^/]+)/)[1];
			var tlds = ["ac", "ad", "ae", "aero", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "arpa", "as", "asia", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "biz", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cat", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "com", "coop", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "edu", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gov", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "info", "int", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jobs", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mil", "mk", "ml", "mm", "mn", "mo", "mobi", "mp", "mq", "mr", "ms", "mt", "mu", "museum", "mv", "mw", "mx", "my", "mz", "na", "name", "nc", "ne", "net", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "org", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "post", "pr", "pro", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tel", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "travel", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xxx", "ye", "yt", "za", "zm", "zw"];
			var slds = ["com.ac", "net.ac", "gov.ac", "org.ac", "mil.ac", "co.ae", "net.ae", "gov.ae", "ac.ae", "sch.ae", "org.ae", "mil.ae", "pro.ae", "name.ae", "com.af", "edu.af", "gov.af", "net.af", "org.af", "com.al", "edu.al", "gov.al", "mil.al", "net.al", "org.al", "ed.ao", "gv.ao", "og.ao", "co.ao", "pb.ao", "it.ao", "com.ar", "edu.ar", "gob.ar", "gov.ar", "gov.ar", "int.ar", "mil.ar", "net.ar", "org.ar", "tur.ar", "gv.at", "ac.at", "co.at", "or.at", "com.au", "net.au", "org.au", "edu.au", "gov.au", "csiro.au", "asn.au", "id.au", "org.ba", "net.ba", "edu.ba", "gov.ba", "mil.ba", "unsa.ba", "untz.ba", "unmo.ba", "unbi.ba", "unze.ba", "co.ba", "com.ba", "rs.ba", "co.bb", "com.bb", "net.bb", "org.bb", "gov.bb", "edu.bb", "info.bb", "store.bb", "tv.bb", "biz.bb", "com.bh", "info.bh", "cc.bh", "edu.bh", "biz.bh", "net.bh", "org.bh", "gov.bh", "com.bn", "edu.bn", "gov.bn", "net.bn", "org.bn", "com.bo", "net.bo", "org.bo", "tv.bo", "mil.bo", "int.bo", "gob.bo", "gov.bo", "edu.bo", "adm.br", "adv.br", "agr.br", "am.br", "arq.br", "art.br", "ato.br", "b.br", "bio.br", "blog.br", "bmd.br", "cim.br", "cng.br", "cnt.br", "com.br", "coop.br", "ecn.br", "edu.br", "eng.br", "esp.br", "etc.br", "eti.br", "far.br", "flog.br", "fm.br", "fnd.br", "fot.br", "fst.br", "g12.br", "ggf.br", "gov.br", "imb.br", "ind.br", "inf.br", "jor.br", "jus.br", "lel.br", "mat.br", "med.br", "mil.br", "mus.br", "net.br", "nom.br", "not.br", "ntr.br", "odo.br", "org.br", "ppg.br", "pro.br", "psc.br", "psi.br", "qsl.br", "rec.br", "slg.br", "srv.br", "tmp.br", "trd.br", "tur.br", "tv.br", "vet.br", "vlog.br", "wiki.br", "zlg.br", "com.bs", "net.bs", "org.bs", "edu.bs", "gov.bs", "com.bz", "edu.bz", "gov.bz", "net.bz", "org.bz", "ab.ca", "bc.ca", "mb.ca", "nb.ca", "nf.ca", "nl.ca", "ns.ca", "nt.ca", "nu.ca", "on.ca", "pe.ca", "qc.ca", "sk.ca", "yk.ca", "co.ck", "org.ck", "edu.ck", "gov.ck", "net.ck", "gen.ck", "biz.ck", "info.ck", "ac.cn", "com.cn", "edu.cn", "gov.cn", "mil.cn", "net.cn", "org.cn", "ah.cn", "bj.cn", "cq.cn", "fj.cn", "gd.cn", "gs.cn", "gz.cn", "gx.cn", "ha.cn", "hb.cn", "he.cn", "hi.cn", "hl.cn", "hn.cn", "jl.cn", "js.cn", "jx.cn", "ln.cn", "nm.cn", "nx.cn", "qh.cn", "sc.cn", "sd.cn", "sh.cn", "sn.cn", "sx.cn", "tj.cn", "tw.cn", "xj.cn", "xz.cn", "yn.cn", "zj.cn", "com.co", "org.co", "edu.co", "gov.co", "net.co", "mil.co", "nom.co", "ac.cr", "co.cr", "ed.cr", "fi.cr", "go.cr", "or.cr", "sa.cr", "cr", "ac.cy", "net.cy", "gov.cy", "org.cy", "pro.cy", "name.cy", "ekloges.cy", "tm.cy", "ltd.cy", "biz.cy", "press.cy", "parliament.cy", "com.cy", "edu.do", "gob.do", "gov.do", "com.do", "sld.do", "org.do", "net.do", "web.do", "mil.do", "art.do", "com.dz", "org.dz", "net.dz", "gov.dz", "edu.dz", "asso.dz", "pol.dz", "art.dz", "com.ec", "info.ec", "net.ec", "fin.ec", "med.ec", "pro.ec", "org.ec", "edu.ec", "gov.ec", "mil.ec", "com.eg", "edu.eg", "eun.eg", "gov.eg", "mil.eg", "name.eg", "net.eg", "org.eg", "sci.eg", "com.er", "edu.er", "gov.er", "mil.er", "net.er", "org.er", "ind.er", "rochest.er", "w.er", "com.es", "nom.es", "org.es", "gob.es", "edu.es", "com.et", "gov.et", "org.et", "edu.et", "net.et", "biz.et", "name.et", "info.et", "ac.fj", "biz.fj", "com.fj", "info.fj", "mil.fj", "name.fj", "net.fj", "org.fj", "pro.fj", "co.fk", "org.fk", "gov.fk", "ac.fk", "nom.fk", "net.fk", "fr", "tm.fr", "asso.fr", "nom.fr", "prd.fr", "presse.fr", "com.fr", "gouv.fr", "co.gg", "net.gg", "org.gg", "com.gh", "edu.gh", "gov.gh", "org.gh", "mil.gh", "com.gn", "ac.gn", "gov.gn", "org.gn", "net.gn", "com.gr", "edu.gr", "net.gr", "org.gr", "gov.gr", "mil.gr", "com.gt", "edu.gt", "net.gt", "gob.gt", "org.gt", "mil.gt", "ind.gt", "com.gu", "net.gu", "gov.gu", "org.gu", "edu.gu", "com.hk", "edu.hk", "gov.hk", "idv.hk", "net.hk", "org.hk", "ac.id", "co.id", "net.id", "or.id", "web.id", "sch.id", "mil.id", "go.id", "war.net.id", "ac.il", "co.il", "org.il", "net.il", "k12.il", "gov.il", "muni.il", "idf.il", "in", "co.in", "firm.in", "net.in", "org.in", "gen.in", "ind.in", "ac.in", "edu.in", "res.in", "ernet.in", "gov.in", "mil.in", "nic.in", "nic.in", "iq", "gov.iq", "edu.iq", "com.iq", "mil.iq", "org.iq", "net.iq", "ir", "ac.ir", "co.ir", "gov.ir", "id.ir", "net.ir", "org.ir", "sch.ir", "dnssec.ir", "gov.it", "edu.it", "co.je", "net.je", "org.je", "com.jo", "net.jo", "gov.jo", "edu.jo", "org.jo", "mil.jo", "name.jo", "sch.jo", "ac.jp", "ad.jp", "co.jp", "ed.jp", "go.jp", "gr.jp", "lg.jp", "ne.jp", "or.jp", "co.ke", "or.ke", "ne.ke", "go.ke", "ac.ke", "sc.ke", "me.ke", "mobi.ke", "info.ke", "per.kh", "com.kh", "edu.kh", "gov.kh", "mil.kh", "net.kh", "org.kh", "com.ki", "biz.ki", "de.ki", "net.ki", "info.ki", "org.ki", "gov.ki", "edu.ki", "mob.ki", "tel.ki", "km", "com.km", "coop.km", "asso.km", "nom.km", "presse.km", "tm.km", "medecin.km", "notaires.km", "pharmaciens.km", "veterinaire.km", "edu.km", "gouv.km", "mil.km", "net.kn", "org.kn", "edu.kn", "gov.kn", "kr", "co.kr", "ne.kr", "or.kr", "re.kr", "pe.kr", "go.kr", "mil.kr", "ac.kr", "hs.kr", "ms.kr", "es.kr", "sc.kr", "kg.kr", "seoul.kr", "busan.kr", "daegu.kr", "incheon.kr", "gwangju.kr", "daejeon.kr", "ulsan.kr", "gyeonggi.kr", "gangwon.kr", "chungbuk.kr", "chungnam.kr", "jeonbuk.kr", "jeonnam.kr", "gyeongbuk.kr", "gyeongnam.kr", "jeju.kr", "edu.kw", "com.kw", "net.kw", "org.kw", "gov.kw", "com.ky", "org.ky", "net.ky", "edu.ky", "gov.ky", "com.kz", "edu.kz", "gov.kz", "mil.kz", "net.kz", "org.kz", "com.lb", "edu.lb", "gov.lb", "net.lb", "org.lb", "gov.lk", "sch.lk", "net.lk", "int.lk", "com.lk", "org.lk", "edu.lk", "ngo.lk", "soc.lk", "web.lk", "ltd.lk", "assn.lk", "grp.lk", "hotel.lk", "com.lr", "edu.lr", "gov.lr", "org.lr", "net.lr", "com.lv", "edu.lv", "gov.lv", "org.lv", "mil.lv", "id.lv", "net.lv", "asn.lv", "conf.lv", "com.ly", "net.ly", "gov.ly", "plc.ly", "edu.ly", "sch.ly", "med.ly", "org.ly", "id.ly", "ma", "net.ma", "ac.ma", "org.ma", "gov.ma", "press.ma", "co.ma", "tm.mc", "asso.mc", "co.me", "net.me", "org.me", "edu.me", "ac.me", "gov.me", "its.me", "priv.me", "org.mg", "nom.mg", "gov.mg", "prd.mg", "tm.mg", "edu.mg", "mil.mg", "com.mg", "com.mk", "org.mk", "net.mk", "edu.mk", "gov.mk", "inf.mk", "name.mk", "pro.mk", "com.ml", "net.ml", "org.ml", "edu.ml", "gov.ml", "presse.ml", "gov.mn", "edu.mn", "org.mn", "com.mo", "edu.mo", "gov.mo", "net.mo", "org.mo", "com.mt", "org.mt", "net.mt", "edu.mt", "gov.mt", "aero.mv", "biz.mv", "com.mv", "coop.mv", "edu.mv", "gov.mv", "info.mv", "int.mv", "mil.mv", "museum.mv", "name.mv", "net.mv", "org.mv", "pro.mv", "ac.mw", "co.mw", "com.mw", "coop.mw", "edu.mw", "gov.mw", "int.mw", "museum.mw", "net.mw", "org.mw", "com.mx", "net.mx", "org.mx", "edu.mx", "gob.mx", "com.my", "net.my", "org.my", "gov.my", "edu.my", "sch.my", "mil.my", "name.my", "com.nf", "net.nf", "arts.nf", "store.nf", "web.nf", "firm.nf", "info.nf", "other.nf", "per.nf", "rec.nf", "com.ng", "org.ng", "gov.ng", "edu.ng", "net.ng", "sch.ng", "name.ng", "mobi.ng", "biz.ng", "mil.ng", "gob.ni", "co.ni", "com.ni", "ac.ni", "edu.ni", "org.ni", "nom.ni", "net.ni", "mil.ni", "com.np", "edu.np", "gov.np", "org.np", "mil.np", "net.np", "edu.nr", "gov.nr", "biz.nr", "info.nr", "net.nr", "org.nr", "com.nr", "com.om", "co.om", "edu.om", "ac.om", "sch.om", "gov.om", "net.om", "org.om", "mil.om", "museum.om", "biz.om", "pro.om", "med.om", "edu.pe", "gob.pe", "nom.pe", "mil.pe", "sld.pe", "org.pe", "com.pe", "net.pe", "com.ph", "net.ph", "org.ph", "mil.ph", "ngo.ph", "i.ph", "gov.ph", "edu.ph", "com.pk", "net.pk", "edu.pk", "org.pk", "fam.pk", "biz.pk", "web.pk", "gov.pk", "gob.pk", "gok.pk", "gon.pk", "gop.pk", "gos.pk", "pwr.pl", "com.pl", "biz.pl", "net.pl", "art.pl", "edu.pl", "org.pl", "ngo.pl", "gov.pl", "info.pl", "mil.pl", "waw.pl", "warszawa.pl", "wroc.pl", "wroclaw.pl", "krakow.pl", "katowice.pl", "poznan.pl", "lodz.pl", "gda.pl", "gdansk.pl", "slupsk.pl", "radom.pl", "szczecin.pl", "lublin.pl", "bialystok.pl", "olsztyn.pl", "torun.pl", "gorzow.pl", "zgora.pl", "biz.pr", "com.pr", "edu.pr", "gov.pr", "info.pr", "isla.pr", "name.pr", "net.pr", "org.pr", "pro.pr", "est.pr", "prof.pr", "ac.pr", "com.ps", "net.ps", "org.ps", "edu.ps", "gov.ps", "plo.ps", "sec.ps", "co.pw", "ne.pw", "or.pw", "ed.pw", "go.pw", "belau.pw", "arts.ro", "com.ro", "firm.ro", "info.ro", "nom.ro", "nt.ro", "org.ro", "rec.ro", "store.ro", "tm.ro", "www.ro", "co.rs", "org.rs", "edu.rs", "ac.rs", "gov.rs", "in.rs", "com.sb", "net.sb", "edu.sb", "org.sb", "gov.sb", "com.sc", "net.sc", "edu.sc", "gov.sc", "org.sc", "co.sh", "com.sh", "org.sh", "gov.sh", "edu.sh", "net.sh", "nom.sh", "com.sl", "net.sl", "org.sl", "edu.sl", "gov.sl", "gov.st", "saotome.st", "principe.st", "consulado.st", "embaixada.st", "org.st", "edu.st", "net.st", "com.st", "store.st", "mil.st", "co.st", "edu.sv", "gob.sv", "com.sv", "org.sv", "red.sv", "co.sz", "ac.sz", "org.sz", "com.tr", "gen.tr", "org.tr", "biz.tr", "info.tr", "av.tr", "dr.tr", "pol.tr", "bel.tr", "tsk.tr", "bbs.tr", "k12.tr", "edu.tr", "name.tr", "net.tr", "gov.tr", "web.tr", "tel.tr", "tv.tr", "co.tt", "com.tt", "org.tt", "net.tt", "biz.tt", "info.tt", "pro.tt", "int.tt", "coop.tt", "jobs.tt", "mobi.tt", "travel.tt", "museum.tt", "aero.tt", "cat.tt", "tel.tt", "name.tt", "mil.tt", "edu.tt", "gov.tt", "edu.tw", "gov.tw", "mil.tw", "com.tw", "net.tw", "org.tw", "idv.tw", "game.tw", "ebiz.tw", "club.tw", "com.mu", "gov.mu", "net.mu", "org.mu", "ac.mu", "co.mu", "or.mu", "ac.mz", "co.mz", "edu.mz", "org.mz", "gov.mz", "com.na", "co.na", "ac.nz", "co.nz", "cri.nz", "geek.nz", "gen.nz", "govt.nz", "health.nz", "iwi.nz", "maori.nz", "mil.nz", "net.nz", "org.nz", "parliament.nz", "school.nz", "abo.pa", "ac.pa", "com.pa", "edu.pa", "gob.pa", "ing.pa", "med.pa", "net.pa", "nom.pa", "org.pa", "sld.pa", "com.pt", "edu.pt", "gov.pt", "int.pt", "net.pt", "nome.pt", "org.pt", "publ.pt", "com.py", "edu.py", "gov.py", "mil.py", "net.py", "org.py", "com.qa", "edu.qa", "gov.qa", "mil.qa", "net.qa", "org.qa", "asso.re", "com.re", "nom.re", "ac.ru", "adygeya.ru", "altai.ru", "amur.ru", "arkhangelsk.ru", "astrakhan.ru", "bashkiria.ru", "belgorod.ru", "bir.ru", "bryansk.ru", "buryatia.ru", "cbg.ru", "chel.ru", "chelyabinsk.ru", "chita.ru", "chita.ru", "chukotka.ru", "chuvashia.ru", "com.ru", "dagestan.ru", "e-burg.ru", "edu.ru", "gov.ru", "grozny.ru", "int.ru", "irkutsk.ru", "ivanovo.ru", "izhevsk.ru", "jar.ru", "joshkar-ola.ru", "kalmykia.ru", "kaluga.ru", "kamchatka.ru", "karelia.ru", "kazan.ru", "kchr.ru", "kemerovo.ru", "khabarovsk.ru", "khakassia.ru", "khv.ru", "kirov.ru", "koenig.ru", "komi.ru", "kostroma.ru", "kranoyarsk.ru", "kuban.ru", "kurgan.ru", "kursk.ru", "lipetsk.ru", "magadan.ru", "mari.ru", "mari-el.ru", "marine.ru", "mil.ru", "mordovia.ru", "mosreg.ru", "msk.ru", "murmansk.ru", "nalchik.ru", "net.ru", "nnov.ru", "nov.ru", "novosibirsk.ru", "nsk.ru", "omsk.ru", "orenburg.ru", "org.ru", "oryol.ru", "penza.ru", "perm.ru", "pp.ru", "pskov.ru", "ptz.ru", "rnd.ru", "ryazan.ru", "sakhalin.ru", "samara.ru", "saratov.ru", "simbirsk.ru", "smolensk.ru", "spb.ru", "stavropol.ru", "stv.ru", "surgut.ru", "tambov.ru", "tatarstan.ru", "tom.ru", "tomsk.ru", "tsaritsyn.ru", "tsk.ru", "tula.ru", "tuva.ru", "tver.ru", "tyumen.ru", "udm.ru", "udmurtia.ru", "ulan-ude.ru", "vladikavkaz.ru", "vladimir.ru", "vladivostok.ru", "volgograd.ru", "vologda.ru", "voronezh.ru", "vrn.ru", "vyatka.ru", "yakutia.ru", "yamal.ru", "yekaterinburg.ru", "yuzhno-sakhalinsk.ru", "ac.rw", "co.rw", "com.rw", "edu.rw", "gouv.rw", "gov.rw", "int.rw", "mil.rw", "net.rw", "com.sa", "edu.sa", "gov.sa", "med.sa", "net.sa", "org.sa", "pub.sa", "sch.sa", "com.sd", "edu.sd", "gov.sd", "info.sd", "med.sd", "net.sd", "org.sd", "tv.sd", "a.se", "ac.se", "b.se", "bd.se", "c.se", "d.se", "e.se", "f.se", "g.se", "h.se", "i.se", "k.se", "l.se", "m.se", "n.se", "o.se", "org.se", "p.se", "parti.se", "pp.se", "press.se", "r.se", "s.se", "t.se", "tm.se", "u.se", "w.se", "x.se", "y.se", "z.se", "com.sg", "edu.sg", "gov.sg", "idn.sg", "net.sg", "org.sg", "per.sg", "art.sn", "com.sn", "edu.sn", "gouv.sn", "org.sn", "perso.sn", "univ.sn", "com.sy", "edu.sy", "gov.sy", "mil.sy", "net.sy", "news.sy", "org.sy", "ac.th", "co.th", "go.th", "in.th", "mi.th", "net.th", "or.th", "ac.tj", "biz.tj", "co.tj", "com.tj", "edu.tj", "go.tj", "gov.tj", "info.tj", "int.tj", "mil.tj", "name.tj", "net.tj", "nic.tj", "org.tj", "test.tj", "web.tj", "agrinet.tn", "com.tn", "defense.tn", "edunet.tn", "ens.tn", "fin.tn", "gov.tn", "ind.tn", "info.tn", "intl.tn", "mincom.tn", "nat.tn", "net.tn", "org.tn", "perso.tn", "rnrt.tn", "rns.tn", "rnu.tn", "tourism.tn", "ac.tz", "co.tz", "go.tz", "ne.tz", "or.tz", "biz.ua", "cherkassy.ua", "chernigov.ua", "chernovtsy.ua", "ck.ua", "cn.ua", "co.ua", "com.ua", "crimea.ua", "cv.ua", "dn.ua", "dnepropetrovsk.ua", "donetsk.ua", "dp.ua", "edu.ua", "gov.ua", "if.ua", "in.ua", "ivano-frankivsk.ua", "kh.ua", "kharkov.ua", "kherson.ua", "khmelnitskiy.ua", "kiev.ua", "kirovograd.ua", "km.ua", "kr.ua", "ks.ua", "kv.ua", "lg.ua", "lugansk.ua", "lutsk.ua", "lviv.ua", "me.ua", "mk.ua", "net.ua", "nikolaev.ua", "od.ua", "odessa.ua", "org.ua", "pl.ua", "poltava.ua", "pp.ua", "rovno.ua", "rv.ua", "sebastopol.ua", "sumy.ua", "te.ua", "ternopil.ua", "uzhgorod.ua", "vinnica.ua", "vn.ua", "zaporizhzhe.ua", "zhitomir.ua", "zp.ua", "zt.ua", "ac.ug", "co.ug", "go.ug", "ne.ug", "or.ug", "org.ug", "sc.ug", "ac.uk", "bl.uk", "british-library.uk", "co.uk", "cym.uk", "gov.uk", "govt.uk", "icnet.uk", "jet.uk", "lea.uk", "ltd.uk", "me.uk", "mil.uk", "mod.uk", "mod.uk", "national-library-scotland.uk", "nel.uk", "net.uk", "nhs.uk", "nhs.uk", "nic.uk", "nls.uk", "org.uk", "orgn.uk", "parliament.uk", "parliament.uk", "plc.uk", "police.uk", "sch.uk", "scot.uk", "soc.uk", "dni.us", "fed.us", "isa.us", "kids.us", "nsn.us", "com.uy", "edu.uy", "gub.uy", "mil.uy", "net.uy", "org.uy", "co.ve", "com.ve", "edu.ve", "gob.ve", "info.ve", "mil.ve", "net.ve", "org.ve", "web.ve", "co.vi", "com.vi", "k12.vi", "net.vi", "org.vi", "ac.vn", "biz.vn", "com.vn", "edu.vn", "gov.vn", "health.vn", "info.vn", "int.vn", "name.vn", "net.vn", "org.vn", "pro.vn", "co.ye", "com.ye", "gov.ye", "ltd.ye", "me.ye", "net.ye", "org.ye", "plc.ye", "ac.yu", "co.yu", "edu.yu", "gov.yu", "org.yu", "ac.za", "agric.za", "alt.za", "bourse.za", "city.za", "co.za", "cybernet.za", "db.za", "ecape.school.za", "edu.za", "fs.school.za", "gov.za", "gp.school.za", "grondar.za", "iaccess.za", "imt.za", "inca.za", "kzn.school.za", "landesign.za", "law.za", "lp.school.za", "mil.za", "mpm.school.za", "ncape.school.za", "net.za", "ngo.za", "nis.za", "nom.za", "nw.school.za", "olivetti.za", "org.za", "pix.za", "school.za", "tm.za", "wcape.school.za", "web.za", "ac.zm", "co.zm", "com.zm", "edu.zm", "gov.zm", "net.zm", "org.zm", "sch.zm"];
			var domains = hostname.split(".");
			if (!trimSubdomain || domains.length <= 2) {
				return hostname;
			}
			var tld = domains[domains.length - 1];
			var sld = domains[domains.length - 2] + "." + domains[domains.length - 1];
			if (tlds.indexOf(tld != -1)) {
				if (slds.indexOf(sld) != -1) {
					return domains[domains.length - 3] + "." + domains[domains.length - 2] + "." + domains[domains.length - 1];
				} else {
					return domains[domains.length - 2] + "." + domains[domains.length - 1];
				}
			}
		},
		trim: function(str, chars) {
			return pagerank.background.ltrim(pagerank.background.rtrim(str, chars), chars);
		},
		ltrim: function(str, chars) {
			chars = chars || "\\s";
			return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
		},
		rtrim: function(str, chars) {
			chars = chars || "\\s";
			return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
		},
		toHex8: function(b) {
			return (b < 16 ? "0" : "") + b.toString(16);
		},
		hexEncodeU32: function(b) {
			var c = pagerank.background.toHex8(b >>> 24);
			c += pagerank.background.toHex8(b >>> 16 & 255);
			c += pagerank.background.toHex8(b >>> 8 & 255);
			return c + pagerank.background.toHex8(b & 255);
		},
		awesomeHash: function(b) {
			for (var c = 16909125, d = 0; d < b.length; d++) {
				var HASH_SEED_ = "Mining PageRank is AGAINST GOOGLE'S TERMS OF SERVICE. Yes, I'm talking to you, scammer.";
				c ^= HASH_SEED_.charCodeAt(d % HASH_SEED_.length) ^ b.charCodeAt(d);
				c = c >>> 23 | c << 9;
			}
			return pagerank.background.hexEncodeU32(c);
		},
		getPageRank: function(url) {
			var hash = pagerank.background.awesomeHash(url.split("#")[0].split("//")[1]);
			var query = "http://toolbarqueries.google.com/tbr?client=navclient-auto&ch=8" + hash + "&features=Rank&q=info:" + url.split("//")[1];
			var xhr = new XMLHttpRequest();
			xhr.open("GET", query, false); //Synchronous
			xhr.send();
			var pgRank = "N/A";
			if (xhr.responseText) {
				if (xhr.responseText.length < 15) {
					pgRank = xhr.responseText.split(":")[2].split("\n")[0];
				} else {
					pgRank = "0";
				}
			} else {
				pgRank = "0";
			}
			return pagerank.background.trim(pgRank);
		},
		setBadge: function(msg, tabId) {
			chrome.browserAction.setBadgeText({
				'text': msg,
				'tabId': tabId
			});
		},
		setIcon: function(path, tabId) {
			console.log(path);
			chrome.browserAction.setIcon({
				'path': path,
				'tabId': tabId
			});
		},
		setTitle: function(msg, tabId) {
			chrome.browserAction.setTitle({
				'title': msg,
				'tabId': tabId
			});
		},
		init: function() {
			//is firstRun?
			// if (typeof(localStorage['isFirstRun']) == 'undefined') {
			//     pagerank.tracking.track("ExtensionInstalled", {});
			//     localStorage['isFirstRun'] = true;
			// }
		}
	};
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var pr = pagerank.background.getPageRank(tab.url);
	pagerank.background.setBadge(pr, tab.id);
	pagerank.background.setTitle("Page Rank :" + pr, tab.id);
	pagerank.background.setIcon("images/" + pr + ".png", tab.id);
});

window.addEventListener("load", function() {
	pagerank.background.init();
}, false);

var manifest = chrome.runtime.getManifest();
chrome.runtime.onInstalled.addListener(function(details) {
	//console.log(manifest);
	if (details.reason === 'install') {
		mixpanel.track('Extension Installed', {
			name: manifest.name,
			version: manifest.version
		});
	}
	if (details.reason === 'update') {
		mixpanel.track('Extension Updated', {
			name: manifest.name,
			previousVersion: details.previousVersion,
			currentVersion: manifest.version
		});
	}
});
