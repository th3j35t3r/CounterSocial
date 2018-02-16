/* encode.h
 * Copyright (c) 2011, Peter Ohler
 * All rights reserved.
 */

#ifndef __OX_ENCODE_H__
#define __OX_ENCODE_H__

#include "ruby.h"
#if HAS_ENCODING_SUPPORT
#include "ruby/encoding.h"
#endif

static inline VALUE
ox_encode(VALUE rstr) {
#if HAS_ENCODING_SUPPORT
    rb_enc_associate(rstr, ox_utf8_encoding);
#else
    if (Qnil != ox_utf8_encoding) {
	rstr = rb_funcall(ox_utf8_encoding, ox_iconv_id, 1, rstr);
    }
#endif
    return rstr;
}

#endif /* __OX_ENCODE_H__ */
