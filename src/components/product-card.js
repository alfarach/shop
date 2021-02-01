import React from 'react';
import { Box, Heading, Text, AspectImage } from 'theme-ui';
import Image from 'components/image';
import { Link } from 'components/link';

import CommentIcon from 'assets/comment-1.svg';
import { FaStrikethrough } from 'react-icons/fa';

const ProductCard = (props) => {
  return (
    <Box sx={styles.fevCard}>
      <Box className="image" sx={styles.image}>
        <AspectImage ratio={5 / 5} src={props.image} alt="" />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">
          <Link path={props.path}>{props.title}</Link>
        </Heading>
        {props.discount != 0 ? (
          <Text >
            <Text as="span" sx={styles.Discount}>{props.discount}%</Text>
            <Text as="span" sx={styles.Price}>Rp{props.price}</Text>
          </Text>
        ) : ''}

        <Text sx={styles.FinalPrice}>
          {/* <Image src={CommentIcon} alt="" /> */}
          Rp{props.finalprice}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;

const styles = {
  Price: {
    fontWeight: 'normal',
    fontSize: ['18px', null, '17px', null, 0],
    textDecoration: 'line-through',
  },
  FinalPrice: {
    fontWeight: 'bold',
    fontSize: ['18px', null, '17px', null, 2],
  },
  Discount: {
    fontWeight: 'bold',
    fontSize: ['18px', null, '17px', null, 0],
    textDecoration: 'none',

    backgroundColor: 'rgb(255, 234, 239)',
    color: 'rgb(255, 92, 132)',
    padding: '2px 4px',
    mr: '5px',
  },
  fevCard: {
    transition: '500ms',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
  },
  image: {
    overflow: 'hidden',
    borderTopLeftRadius: ['5px'],
    borderTopRightRadius: ['5px'],
    img: {
      display: 'block',
      width: '100%',
      height: '100%',
    },
  },
  content: {
    backgroundColor: '#fff',
    paddingLeft: [20, null, null, '10px'],
    paddingRight: [20, null, null, '10px'],
    paddingTop: ['15px', null, null, '10px'],
    borderBottomLeftRadius: ['5px'],
    borderBottomRightRadius: ['5px'],
    pb: ['10px', null, null, null, '10px'],
    border: '1px solid #F3F4F5',
    borderTop: '0',
    height: '115px',
    h3: {
      fontWeight: 'normal',
      fontSize: ['18px', null, '17px', null, 2],
      lineHeight: [1.3],
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'pre-wrap',
      maxHeight: '100%',
      maxWidth: '100%',
      display: '-webkit-box',
      webkitLineClamp: '2',
      webkitBoxOrient: 'vertical',
      mb: '5px',
      a: {
        transition: '500ms',
        '&:hover': {
          color: 'primary',
        },
      },
    },
    p: {
      display: 'flex',
      alignItems: 'center',
      fontSize: [1, null, 2],
      lineHeight: [2],
      color: 'text',
      opacity: 0.8,
      mt: ['4px'],
      img: {
        width: ['16px', null, 'auto'],
        mr: ['8px'],
      },
    },
  },
};
