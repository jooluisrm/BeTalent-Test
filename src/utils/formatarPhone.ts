export const formatPhoneNumber = (phoneNumber: string) => {
    const phoneString = phoneNumber.toString();
    
    const countryCode = phoneString.slice(0, 2);  
    const areaCode = phoneString.slice(2, 4);     
    const firstPart = phoneString.slice(4, 9);    
    const secondPart = phoneString.slice(9);      
  
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
  };