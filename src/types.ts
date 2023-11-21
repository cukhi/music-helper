export type MBTIType =
'ISTJ'|
'ISFJ'|
'INTJ'|
'INFJ'|
'ISTP'|
'ISFP'|
'INTP'|
'INFP'|
'ESTP'|
'ESFP'|
'ENTP'|
'ENFP'|
'ESTJ'|
'ESFJ'|
'ENTJ'|
'ENFJ'



export interface FormData{
    favouriteArtist:string,
    favouriteGenre:string,
    personalityType:MBTIType
  }