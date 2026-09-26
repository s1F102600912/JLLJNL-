const draftData = [
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 1, player: "AriyaGX" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 2, player: "N1ghtGreg" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 3, player: "KOTA20010026" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 4, player: "vluniz" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 5, player: "kilisame2" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 6, player: "kyuu_1145" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 7, player: "HIibozu_0427" },
      { league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 8, player: "Jyas_36" },{ league: "JLL", season: "S1", team: "ジャイアンツ", manager: "daibko", pick: 9, player: "Oshima8" },

      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 1, player: "Akkanwakinn07090" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 2, player: "SHOGAVS08" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 3, player: "Gotyusd" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 4, player: "abj594" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 5, player: "inakasyounen" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 6, player: "koushi0527" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 7, player: "kosame55" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 8, player: "natume_83" },
      { league: "JLL", season: "S1", team: "ベイスターズ", manager: "非公開", pick: 9, player: "Oukn3d" },

      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 1, player: "Ryry5567312" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 2, player: "yya0206" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 3, player: "Botkn0628" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 4, player: "tingisha_n7" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 5, player: "ryosataka" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 6, player: "hina1204zzz" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 7, player: "oslhvhqp4i" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 8, player: "imgotkaito" },
      { league: "JLL", season: "S1", team: "イーグルス", manager: "amenekoyumeneko", pick: 9, player: "Daruneko_0" },

      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 1, player: "karaage147" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 2, player: "Chiyuutarou" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 3, player: "RoS5e_0" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 4, player: "emiemi00332200" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 5, player: "Matsutai207" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 6, player: "EIGHT810067" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 7, player: "Piokun0913" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 8, player: "miru_miru521" },
      { league: "JLL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 9, player: "Ibuki_2032" },

      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 1, player: "daibko" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 2, player: "KOTA2010026" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 3, player: "fv4vmei" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 4, player: "ovoricerca" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 5, player: "FazeMankuii" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 6, player: "emiemi00332200" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 7, player: "TAS6602" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 8, player: "agjm541" },
      { league: "JLL", season: "S2", team: "ファイターズ", manager: "4tvzz", pick: 9, player: "kevavu014" },{ league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 1, player: "AriyaGX" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 2, player: "tamago_712" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 3, player: "siiitake" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 4, player: "kosame55" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 5, player: "HARU_26x" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 6, player: "HIibozu_0427" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 7, player: "kane_maaaru" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 8, player: "Jyasu_36" },
      { league: "JLL", season: "S2", team: "マリーンズ", manager: "amenekoyumeneko", pick: 9, player: "Ibuki_2032" },

      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 1, player: "Senalirs" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 2, player: "kilisame2" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 3, player: "SHOGAVS08" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 4, player: "oslhvhqp4i" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 5, player: "SORAjdmjt" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 6, player: "T1d3nV" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 7, player: "Piokun0913" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 8, player: "syouyusensei3" },
      { league: "JLL", season: "S2", team: "タイガース", manager: "非公開", pick: 9, player: "ohshima8" },

      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 1, player: "yya0206" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 2, player: "aozoraSKYLINE" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 3, player: "kazu_HCBB" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 4, player: "EIGHT88102221" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 5, player: "Botkn0628" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 6, player: "kamome_99" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 7, player: "Inakasyounenn" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 8, player: "noa2525356" },
      { league: "JLL", season: "S2", team: "カープ", manager: "karaage147", pick: 9, player: "ousei_0111" },

      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 1, player: "ARIYAGX" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 2, player: "KAMOME_99" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 3, player: "AMENEKOYUMENEKO" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 4, player: "YYA0206" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 5, player: "EMIEMI00332200" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 6, player: "INAKASYOUNEN" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 7, player: "KEVAVU014" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 8, player: "JYASU_36" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 9, player: "SSPP_R" },
      { league: "JNL", season: "S1", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 10, player: "YOUSAY2029" },{ league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 1, player: "N1GHTGREG" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 2, player: "FAZEMANKUII" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 3, player: "ROZU_1X" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 4, player: "PIOKUN0913" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 5, player: "PANPONNSYUKONN" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 6, player: "KARAAGE147" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 7, player: "HARU_26X" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 8, player: "KISINON_12345" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 9, player: "HIIBOZU_0417" },
      { league: "JNL", season: "S1", team: "ベイスターズ", manager: "kane_maaaru", pick: 10, player: "TOMOYANNN16" },

      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 1, player: "DAIBKO" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 2, player: "TAMAGO_712" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 3, player: "VLUNIZ" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 4, player: "AKK_HAYATEZZ" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 5, player: "EIGHT88102221" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 6, player: "TAROU910" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 7, player: "N3STUSL" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 8, player: "RYRY5567312" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 9, player: "SENKANNNAGATO" },
      { league: "JNL", season: "S1", team: "タイガース", manager: "316fn100", pick: 10, player: "SORAJDMJT" },

      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 1, player: "HAMICHI_0319" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 2, player: "ASJDJQSD" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 3, player: "SHOGAVS08" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 4, player: "KYUU_1145" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 5, player: "KOSAME55" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 6, player: "SIIITAKE" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 7, player: "TAS6602" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 8, player: "GAIXXXXXXXX" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 9, player: "BOTKN0628" },
      { league: "JNL", season: "S1", team: "マリーンズ", manager: "Senalirs", pick: 10, player: "NOZOMINMIN117" },

      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 1, player: "Ariyagx" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 2, player: "hevdarkk" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 3, player: "Rozu_1x" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 4, player: "HAMICHI_0319" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 5, player: "senkannagato9" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 6, player: "kosame55" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 7, player: "ryu91154" },{ league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 8, player: "shark091226" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 9, player: "tas6602" },
      { league: "JNL", season: "S2", team: "カープ", manager: "kane_maaaru", pick: 10, player: "Botkn0628" },

      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 1, player: "amenekoyumeneko" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 2, player: "tamago_712" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 3, player: "saegraal57" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 4, player: "Akk_hayatezz" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 5, player: "Subaraya_ak25" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 6, player: "Nekomaguro111" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 7, player: "nozominmin117" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 8, player: "kamakama_ontama" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 9, player: "tarou910" },
      { league: "JNL", season: "S2", team: "ファイターズ", manager: "非公開", pick: 10, player: "ryry5561312" },

      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 1, player: "iotsaluv" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 2, player: "4tvzz" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 3, player: "Washingmachinewashy" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 4, player: "asjdjqsd" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 5, player: "hiibozu_0427" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 6, player: "Eight_artist" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 7, player: "aozoraskyline" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 8, player: "piokun0913" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 9, player: "CHIBISUKE193" },
      { league: "JNL", season: "S2", team: "ジャイアンツ", manager: "daibko", pick: 10, player: "kazuaki_0206" },

      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 1, player: "yya0206" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 2, player: "Panponnsyukonn" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 3, player: "kanatononarou" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 4, player: "kamome_99" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 5, player: "siiitake" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 6, player: "emiemi00332200" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 7, player: "HARU_26x" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 8, player: "Gaixxxxxxxx" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 9, player: "n3stusl" },
      { league: "JNL", season: "S2", team: "イーグルス", manager: "非公開", pick: 10, player: "kevavu014" },

      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 1, player: "MEDIUSAKUN" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 2, player: "KAMOME_99" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 3, player: "KOSAME55" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 4, player: "YYA0206" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 5, player: "HIIBOZU_0427" },{ league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 6, player: "VORZAVES" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 7, player: "PINO0320SABU" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 8, player: "OKAMOTOKAZUMAO" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 9, player: "N3STUSL" },
      { league: "JNL", season: "S3", team: "スワローズ", manager: "AriyaGX", pick: 10, player: "AEPU86" },

      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 1, player: "WASHINGMACHINEWASHY" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 2, player: "ASJDJQSD" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 3, player: "KOTA2010026" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 4, player: "PIOKUN0913" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 5, player: "EIGHT_ARTIST" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 6, player: "INFINITYBANANA6" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 7, player: "BOTKN0628" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 8, player: "KYOSANHAKAI" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 9, player: "N14ISM" },
      { league: "JNL", season: "S3", team: "バッファローズ", manager: "tamago_712", pick: 10, player: "TJPJTDJPTPXV" },

      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 1, player: "ROZU_1X" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 2, player: "NEKOMAGURO111" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 3, player: "SHARK091226" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 4, player: "SUBARAYA_AK25" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 5, player: "KANE_MAAARU" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 6, player: "SHUGAR219" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 7, player: "INAKASYOUNEN" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 8, player: "TAS6602" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 9, player: "SORAJDMJT" },
      { league: "JNL", season: "S3", team: "タイガース", manager: "9aliu_s", pick: 10, player: "AOZORASKYLINE" },

      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 1, player: "DAIBKO" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 2, player: "SAEGRAAL57" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 3, player: "EMIEMI00332200" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 4, player: "OSLQHVHQP4I" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 5, player: "GAIXXXXXXXX" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 6, player: "KAZUAKI_0206" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 7, player: "T1D3NVSUB" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 8, player: "KAMAKAMA_ONTAMA" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 9, player: "YUKIYA319" },
      { league: "JNL", season: "S3", team: "ライオンズ", manager: "sspp_r", pick: 10, player: "AGJM541" },

      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 1, player: "nekomaguro111" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 2, player: "panponnsyukonn" },{ league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 3, player: "piokun0913" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 4, player: "gre4n_love" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 5, player: "pino0320sabu" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 6, player: "moriya_kero" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 7, player: "n3stusl" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 8, player: "bossyushin18" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 9, player: "renten905" },
      { league: "JNL", season: "S4", team: "ドラゴンズ", manager: "Rozu_1x", pick: 10, player: "ryosuke747" },

      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 1, player: "Ariyagx" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 2, player: "1v6aq" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 3, player: "hiibozu_0427" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 4, player: "omochi120063" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 5, player: "enoto212111" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 6, player: "vbdc205" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 7, player: "kamakama_ontama" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 8, player: "rena_jp2" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 9, player: "masyu_sensei" },
      { league: "JNL", season: "S4", team: "ライオンズ", manager: "aozoraSKYLINE", pick: 10, player: "4tvzz" },

      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 1, player: "mediusakun" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 2, player: "kosame55" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 3, player: "emiemi00332200" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 4, player: "kanatonotudoi2" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 5, player: "kyuu_1145" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 6, player: "wantarou" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 7, player: "98urng" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 8, player: "supar_son1c" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 9, player: "infinitybanana6" },
      { league: "JNL", season: "S4", team: "ファイターズ", manager: "daibko", pick: 10, player: "CHIBISUKE193" },

      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 1, player: "kamome_99" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 2, player: "GaiXxxxxxxx" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 3, player: "akk_Hayatezz" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 4, player: "shogavs08" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 5, player: "tasmania6602" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 6, player: "kisinon_12345" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 7, player: "imasaori_supercute" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 8, player: "n14ism" },{ league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 9, player: "ryu91154x" },
      { league: "JNL", season: "S4", team: "タイガース", manager: "Subaraya_ak25", pick: 10, player: "agjm541" },

      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 1, player: "yya2026" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 2, player: "oslhvhqp4i" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 3, player: "haru_26x" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 4, player: "kaname03084" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 5, player: "mrhkk0429" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 6, player: "eight_artist" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 7, player: "saku042682" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 8, player: "karaage147" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 9, player: "aiki065" },
      { league: "JNL", season: "S4", team: "ベイスターズ", manager: "asjdjqsd", pick: 10, player: "taishi10220" },

      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 1, player: "HAMICHI_0319" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 2, player: "kota2010026" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 3, player: "vorzaves" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 4, player: "ryry5566312" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 5, player: "masamunedayu" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 6, player: "amenekoyumeneko" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 7, player: "rinrin201100" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 8, player: "kanisyuumai2" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 9, player: "yoruuuuuuu1015" },
      { league: "JNL", season: "S4", team: "マリーンズ", manager: "kane_maaaru", pick: 10, player: "himawari2529" }
    ];

    let currentResult = null;

    let lineup = Array.from({ length: 9 }, (_, i) => ({
      order: i + 1,
      position: "",
      player: "",
      league: "",
      season: "",
      team: "",
      pick: ""
    }));

    function randomChoice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function spinDraft() {
      const leagues = [...new Set(draftData.map(d => d.league))];
      const league = randomChoice(leagues);

      const seasons = [...new Set(
        draftData.filter(d => d.league === league).map(d => d.season)
      )];
      const season = randomChoice(seasons);

      const teams = [...new Set(
        draftData.filter(d => d.league === league && d.season === season).map(d => d.team)
      )];
      const team = randomChoice(teams);

      const picks = [...new Set(
        draftData
          .filter(d => d.league === league && d.season === season && d.team === team)
          .map(d => d.pick)
      )];
      const pick = randomChoice(picks);

      const result = draftData.find(d =>
        d.league === league &&
        d.season === season &&
        d.team === team &&
        d.pick === pick
      );

      currentResult = result;
      renderCurrentResult();
    }

    function renderCurrentResult() {
      document.getElementById("league").textContent = currentResult ? currentResult.league : "-";
      document.getElementById("season").textContent = currentResult ? currentResult.season : "-";
      document.getElementById("team").textContent = currentResult ? currentResult.team : "-";document.getElementById("manager").textContent = currentResult ? currentResult.manager : "-";
      document.getElementById("pick").textContent = currentResult ? `${currentResult.pick}位` : "-";
      document.getElementById("player").textContent = currentResult ? currentResult.player : "-";
    }

    function addToLineup() {
      if (!currentResult) {
        alert("先にルーレットを回してください。");
        return;
      }

      const order = document.getElementById("battingOrder").value;
      const position = document.getElementById("position").value;

      if (!order) {
        alert("打順を選択してください。");
        return;
      }

      if (!position) {
        alert("守備位置を選択してください。");
        return;
      }

      const slotIndex = Number(order) - 1;

      lineup[slotIndex] = {
        order: Number(order),
        position,
        player: currentResult.player,
        league: currentResult.league,
        season: currentResult.season,
        team: currentResult.team,
        pick: currentResult.pick
      };

      renderLineup();
      checkComplete();
    }

    function renderLineup() {
      const tbody = document.getElementById("lineupTable");
      tbody.innerHTML = lineup.map(slot => `
        <tr>
          <td>${slot.order}番</td>
          <td>${slot.position || "-"}</td>
          <td>${slot.player || "-"}</td>
          <td>${slot.league || "-"}</td>
          <td>${slot.season || "-"}</td>
          <td>${slot.team || "-"}</td>
          <td>${slot.pick ? slot.pick + "位" : "-"}</td>
        </tr>
      `).join("");
    }

    function checkComplete() {
      const completed = lineup.every(slot => slot.player !== "" && slot.position !== "");
      document.getElementById("completeMessage").style.display = completed ? "block" : "none";
    }

    function resetCurrent() {
      currentResult = null;
      renderCurrentResult();
    }

    function resetLineup() {
      lineup = Array.from({ length: 9 }, (_, i) => ({
        order: i + 1,
        position: "",
        player: "",
        league: "",
        season: "",
        team: "",
        pick: ""
      }));
      renderLineup();
      checkComplete();
    }

    renderCurrentResult();
    renderLineup();