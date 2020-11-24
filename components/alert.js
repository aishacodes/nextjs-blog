const isNight = s.includes('PM')
const t = s.replace(/[AP]M/, '').split(':')
t[0] = parseInt(t[0])

if(isNight){
  t[0] = t[0] +12
}else{
  if(t[0]===12) t[0] = '00'
}
return t.join(':')