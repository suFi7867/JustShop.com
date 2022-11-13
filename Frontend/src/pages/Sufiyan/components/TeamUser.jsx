import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    HStack,
    IconButton,
  } from '@chakra-ui/react';
  
  import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

  export default function TeamUser({data}) {
    return (
      <Center py={6}>
        <Box
          minW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                data.url
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {data.name}
              </Heading>
              <Text color={'gray.500'}>{data.type}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
            <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">

                       <a  
                       href={data.github} target="_blank" >
                          <IconButton 
                           size="md"      
                            fontSize="4xl"
                            colorScheme='messenger' variant='solid'
                            _hover={{  fontSize:"5xl"  }}
                            icon={<AiFillGithub />}
                          />
                       </a>

                       <a  href={data.linkedin} target="_blank" >
                          <IconButton
                         size="md"
                       
                          fontSize="3xl"
                           colorScheme='messenger' variant='solid'
                           _hover={{  fontSize:"4xl"  }}
                       
                            icon={<BsLinkedin />}
                          />
                       </a>
                    </HStack>
            </Stack>
            <a  href={data.portfolio} target="_blank" >
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              colorScheme="messenger"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              PORTFOLIO
            </Button>
            </a>
          </Box>
        </Box>
      </Center>
    );
  }