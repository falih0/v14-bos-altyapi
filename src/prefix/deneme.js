const { EmbedBuilder } = require("discord.js"); ///bu olmazsa kod çalışmaz. bu modüldür bu modül bu ///komudun discordda çalışmasını sağlıyor.

exports.run = async (client, message, args) => { ///bu yetkileri falan ayarladığın ve mesaj mı ///yazıcaksın ne yazıcaksın burayı biraz öğrenmen lazım.
    const embed = new EmbedBuilder() ///bu aşşağıdaki komutların alayının çalışmasını sağlıyor
    .setColor("Green") ///burdada komutun rengini seçiyorsun.
    .setTitle('botun komut başlığı') ///buda baştaki yazı olcak "yardım sistem:"
    .setDescription(`botun komut yazıları`) ///bu .setdescription yazı yazıcağın yer sondaki ') yi aşşağı indirip ///yazabilirsin.
return message.channel.send({embeds : [embed]}); ///bu embeds sistemi botun o menü istenen kanala bu cs nin altındaki .set leri gönderebilmesini yarıyor.

};
 exports.conf = {
    aliases: [] ///yazıcağım komut 2 yazıyla görebilsinler istiyorsan onu yaz
  };

  exports.help = {
    name: "deneme" ///ne yapıcaksan onu yaz
  };